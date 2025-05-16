'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, Calendar, Book, Clock, MapPin, User, Building, Edit } from 'lucide-react';
import Link from 'next/link';
import { useGetClass } from '@/features/classes/api/use-get-class-by-id';
import { useGetClassStudents } from '@/features/classes/api/use-get-class-students';
import { format } from 'date-fns';

interface ClassOverviewProps {
  classId: string;
}

export function ClassOverview({ classId }: ClassOverviewProps) {
  // Fetch the class data using the real API endpoint
  const { data: classData, isPending: loading, error } = useGetClass({ id: classId });
  
  // Fetch students count separately if not included in class data
  const { data: studentsData } = useGetClassStudents({ classId });
  
  const getInitials = (name: string) => {
    return name
      ? name.split(' ')
          .map(part => part[0])
          .join('')
          .toUpperCase()
      : '';
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
        <div className="p-4 border-b flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !classData) {
    return (
      <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
        <div className="p-4 flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-lg font-medium">Failed to load class data</h3>
            <p className="text-muted-foreground mt-2">
              {error?.message || "Could not retrieve class information"}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  // Extract values from the real data
  const {
    name,
    description,
    schedule,
    timeSlot,
    location,
    capacity,
    leadTeacher,
    subjects = [],
    nursery,
    createdAt,
    updatedAt
  } = classData;

  // Get students count either from class data or separate request
  const studentsCount = classData.studentCount || studentsData?.students?.length || 0;

  return (
    <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
      <div className="p-4 border-b flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-primary/20">
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-base font-semibold leading-tight">{name}</h1>
          <div className="flex mt-1 gap-1.5">
            <Badge variant="outline" className="text-xs px-1.5 h-5">Class</Badge>
            <Badge className="bg-primary/20 text-primary text-xs px-1.5 h-5">
              <Users className="w-3 h-3 mr-1" /> {studentsCount} Students
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-266px)]">
          <div className="p-4 space-y-3">
            {/* Description */}
            {description && (
              <div className="py-1.5">
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            )}

            {/* Schedule Information */}
            <div className="flex items-center gap-3 py-1.5">
              <Calendar className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Schedule:</span>
              <span className="text-sm font-medium ml-auto">
                {schedule || "Not specified"}
              </span>
            </div>

            {/* Time Information */}
            <div className="flex items-center gap-3 py-1.5">
              <Clock className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Time:</span>
              <span className="text-sm font-medium ml-auto">
                {timeSlot || "Not specified"}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 py-1.5">
              <MapPin className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Location:</span>
              <span className="text-sm font-medium ml-auto">
                {location || "Not specified"}
              </span>
            </div>

            {/* Capacity */}
            <div className="flex items-center gap-3 py-1.5">
              <Users className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Capacity:</span>
              <span className="text-sm font-medium ml-auto">
                {studentsCount}/{capacity || "∞"}
              </span>
            </div>

            {/* Lead Teacher */}
            <div className="flex items-center gap-3 py-1.5">
              <User className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Lead Teacher:</span>
              {leadTeacher?.id ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto h-7 px-2.5 text-sm gap-1"
                  asChild
                >
                  <Link href={`/dashboard/staff/${leadTeacher.id}`}>
                    {leadTeacher.name}
                  </Link>
                </Button>
              ) : (
                <span className="text-sm font-medium ml-auto text-muted-foreground">
                  Not assigned
                </span>
              )}
            </div>

            {/* Subjects */}
            {subjects && subjects.length > 0 && (
              <div className="py-1.5">
                <div className="flex items-center gap-3 mb-2">
                  <Book className="w-4 h-4 text-primary/80" />
                  <span className="text-sm text-muted-foreground">Learning Areas:</span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-1 ml-7">
                  {subjects.map((subject, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-background"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Nursery */}
            <div className="flex items-center gap-3 py-1.5">
              <Building className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Nursery:</span>
              {nursery?.id ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto h-7 px-2.5 text-sm gap-1"
                  asChild
                >
                  <Link href={`/dashboard/nurseries/${nursery.id}`}>
                    {nursery.name}
                  </Link>
                </Button>
              ) : (
                <span className="text-sm font-medium ml-auto text-muted-foreground">
                  Not assigned
                </span>
              )}
            </div>

            {/* Edit Button */}
            <div className="flex justify-center pt-2 mt-4">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full"
                asChild
              >
                <Link href={`/dashboard/classes/${classId}/edit`}>
                  <Edit className="w-3.5 h-3.5 mr-1" /> Edit Class Details
                </Link>
              </Button>
            </div>

            {/* Created/Updated Info */}
            <div className="text-xs text-muted-foreground pt-3 border-t border-border/50 mt-4">
              <div className="flex justify-between">
                <span>Created:</span>
                <span>{formatDate(createdAt)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Updated:</span>
                <span>{formatDate(updatedAt)}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}