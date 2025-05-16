'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, Calendar, Book, Clock, MapPin, User, Building, Edit } from 'lucide-react';
import Link from 'next/link';

interface ClassOverviewProps {
  classId: string;
}

export function ClassOverview({ classId }: ClassOverviewProps) {
  // In a real implementation, you would fetch class data from your API
  const [loading, setLoading] = React.useState(true);
  const [classDetails, setClassDetails] = React.useState({
    id: classId,
    name: '',
    description: '',
    teacher: '',
    schedule: '',
    time: '',
    location: '',
    studentsCount: 0,
    capacity: 0,
    nurseryId: '',
    nurseryName: '',
    subjects: [] as string[],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  React.useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setClassDetails({
        id: classId,
        name: `Kindergarten ${classId}`,
        description: 'A fun and engaging class for young learners focused on basic literacy, numeracy, and social skills development.',
        teacher: 'Jane Smith',
        schedule: 'Mon-Fri',
        time: '9:00 AM - 12:00 PM',
        location: 'Room 102',
        studentsCount: 15,
        capacity: 20,
        nurseryId: '1',
        nurseryName: 'Sunshine Nursery',
        subjects: ['Literacy', 'Numeracy', 'Art', 'Physical Development'],
        createdAt: '2023-09-01T10:00:00Z',
        updatedAt: '2023-09-15T14:30:00Z'
      });
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [classId]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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

  return (
    <Card className="w-full h-full overflow-hidden border-none shadow-md bg-background dark:bg-background/20">
      <div className="p-4 border-b flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-primary/20">
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
            {getInitials(classDetails.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-base font-semibold leading-tight">{classDetails.name}</h1>
          <div className="flex mt-1 gap-1.5">
            <Badge variant="outline" className="text-xs px-1.5 h-5">Class</Badge>
            <Badge className="bg-primary/20 text-primary text-xs px-1.5 h-5">
              <Users className="w-3 h-3 mr-1" /> {classDetails.studentsCount} Students
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-266px)]">
          <div className="p-4 space-y-3">
            {/* Description */}
            <div className="py-1.5">
              <p className="text-sm text-muted-foreground">
                {classDetails.description}
              </p>
            </div>

            {/* Schedule Information */}
            <div className="flex items-center gap-3 py-1.5">
              <Calendar className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Schedule:</span>
              <span className="text-sm font-medium ml-auto">
                {classDetails.schedule}
              </span>
            </div>

            {/* Time Information */}
            <div className="flex items-center gap-3 py-1.5">
              <Clock className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Time:</span>
              <span className="text-sm font-medium ml-auto">
                {classDetails.time}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 py-1.5">
              <MapPin className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Location:</span>
              <span className="text-sm font-medium ml-auto">
                {classDetails.location}
              </span>
            </div>

            {/* Capacity */}
            <div className="flex items-center gap-3 py-1.5">
              <Users className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Capacity:</span>
              <span className="text-sm font-medium ml-auto">
                {classDetails.studentsCount}/{classDetails.capacity}
              </span>
            </div>

            {/* Lead Teacher */}
            <div className="flex items-center gap-3 py-1.5">
              <User className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Lead Teacher:</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto h-7 px-2.5 text-sm gap-1"
                asChild
              >
                <Link href={`/dashboard/staff/1`}>
                  {classDetails.teacher}
                </Link>
              </Button>
            </div>

            {/* Subjects */}
            <div className="py-1.5">
              <div className="flex items-center gap-3 mb-2">
                <Book className="w-4 h-4 text-primary/80" />
                <span className="text-sm text-muted-foreground">Learning Areas:</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mt-1 ml-7">
                {classDetails.subjects.map((subject, index) => (
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

            {/* Nursery */}
            <div className="flex items-center gap-3 py-1.5">
              <Building className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Nursery:</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto h-7 px-2.5 text-sm gap-1"
                asChild
              >
                <Link href={`/dashboard/nurseries/${classDetails.nurseryId}`}>
                  {classDetails.nurseryName}
                </Link>
              </Button>
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
                <span>{formatDate(classDetails.createdAt)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Updated:</span>
                <span>{formatDate(classDetails.updatedAt)}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}