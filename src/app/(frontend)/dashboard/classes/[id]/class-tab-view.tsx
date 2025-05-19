/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, User } from "lucide-react";
import Link from "next/link";

interface ClassTabViewProps {
  classId: string;
}

export function ClassTabView({ classId }: ClassTabViewProps) {
  const [students, setStudents] = React.useState([
    {
      id: "1",
      firstName: "Alice",
      lastName: "Smith",
      dateOfBirth: "2019-05-12"
    },
    {
      id: "2",
      firstName: "Bob",
      lastName: "Johnson",
      dateOfBirth: "2019-03-22"
    }
  ]);

  const [teachers, setTeachers] = React.useState([
    { id: "1", name: "Jane Smith", email: "jane@example.com", isLead: true },
    { id: "2", name: "Mark Johnson", email: "mark@example.com", isLead: false }
  ]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part: string) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full">
      <Tabs defaultValue="students">
        <CardHeader>
          <TabsList>
            <TabsTrigger value="students">
              <Users className="w-4 h-4 mr-1" />
              Students
            </TabsTrigger>
            <TabsTrigger value="teachers">
              <User className="w-4 h-4 mr-1" />
              Teachers
            </TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          {/* Students Tab */}
          <TabsContent value="students">
            <h3>Students ({students.length})</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {students.map((student) => (
                <Link
                  key={student.id}
                  href={`/dashboard/children/${student.id}`}
                >
                  <div className="border p-3 rounded flex gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {getInitials(
                          `${student.firstName} ${student.lastName}`
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p>
                        {student.firstName} {student.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        Born: {student.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers">
            <h3>Teachers ({teachers.length})</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {teachers.map((teacher) => (
                <Link key={teacher.id} href={`/dashboard/staff/${teacher.id}`}>
                  <div className="border p-3 rounded flex gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {getInitials(teacher.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p>
                        {teacher.name} {teacher.isLead && <Badge>Lead</Badge>}
                      </p>
                      <p className="text-sm text-gray-500">{teacher.email}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
