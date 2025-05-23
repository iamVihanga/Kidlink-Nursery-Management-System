// "use client";

// import React, { useState } from "react";
// import { Bell, Clock, AlertCircle, Info, Search, Plus } from "lucide-react";
// import PageContainer from "@/components/layouts/page-container";
// import { AppPageShell } from "@/components/layouts/page-shell";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { AddNotificationModal } from "@/features/notifications/components/add-notification-modal";

// // Sample notifications data
// const NOTIFICATIONS = [
//   {
//     id: "1",
//     title: "Monthly Report Due",
//     message: "The monthly progress reports for all students are due by Friday.",
//     type: "reminder",
//     date: "2 hours ago",
//     sender: "Admin"
//   },
//   {
//     id: "2",
//     title: "Parent-Teacher Meeting",
//     message: "Parent-teacher meetings will be held next Tuesday from 4PM - 7PM.",
//     type: "event",
//     date: "Yesterday",
//     sender: "Admin"
//   },
//   {
//     id: "3",
//     title: "New Student Enrolled",
//     message: "Emma Thompson has been enrolled in Playgroup A. Please update your class records.",
//     type: "information",
//     date: "2 days ago",
//     sender: "Admin"
//   },
//   {
//     id: "4",
//     title: "Emergency Drill",
//     message: "Fire emergency drill will be conducted tomorrow at 11 AM. Please review protocols.",
//     type: "alert",
//     date: "3 days ago",
//     sender: "Safety Officer"
//   },
//   {
//     id: "5",
//     title: "Curriculum Update",
//     message: "The updated teaching curriculum for this semester is now available. Please review the changes.",
//     type: "information",
//     date: "1 week ago",
//     sender: "Curriculum Coordinator"
//   }
// ];

// // Notification Item Component
// const NotificationItem = ({ notification }) => {
//   const typeIcons = {
//     reminder: <Clock className="h-5 w-5 text-blue-500" />,
//     alert: <AlertCircle className="h-5 w-5 text-red-500" />,
//     information: <Info className="h-5 w-5 text-green-500" />,
//     event: <Bell className="h-5 w-5 text-yellow-500" />
//   };

//   return (
//     <Card className="mb-4">
//       <CardHeader className="pb-2">
//         <div className="flex justify-between items-start">
//           <div className="flex gap-2 items-center">
//             {typeIcons[notification.type]}
//             <CardTitle className="text-lg">{notification.title}</CardTitle>
//           </div>
//         </div>
//         <CardDescription className="flex justify-between items-center">
//           <span>From: {notification.sender}</span>
//           <span className="text-xs text-muted-foreground">{notification.date}</span>
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p>{notification.message}</p>
//       </CardContent>
//     </Card>
//   );
// };

// export default function NotificationsPage() {
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter notifications based on search query
//   const filteredNotifications = NOTIFICATIONS.filter(notification => {
//     if (!searchQuery) return true;
    
//     return (
//       notification.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       notification.message.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <PageContainer scrollable={true}>
//       <div className="flex flex-1 flex-col space-y-6">
//         <AppPageShell
//           title="Notifications"
//           description="View and manage your notifications" 
//           actionComponent={
//             <Button onClick={() => setOpenAddModal(true)}>
//               <Plus className="mr-1 h-4 w-4" />
//               Add Notification
//             </Button>
//           }
//         />

//         {/* Search */}
//         <div className="relative w-full md:w-64">
//           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search notifications..."
//             className="pl-8"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
        
//         <Separator />

//         {/* Notifications List */}
//         <div className="space-y-4">
//           {filteredNotifications.length > 0 ? (
//             filteredNotifications.map(notification => (
//               <NotificationItem 
//                 key={notification.id} 
//                 notification={notification}
//               />
//             ))
//           ) : (
//             <div className="text-center py-12">
//               <Bell className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
//               <h3 className="mt-4 text-lg font-medium">No notifications found</h3>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 {searchQuery ? "No notifications match your search." : "You don't have any notifications yet."}
//               </p>
//               {searchQuery && (
//                 <Button 
//                   variant="outline" 
//                   className="mt-4"
//                   onClick={() => setSearchQuery("")}
//                 >
//                   Clear search
//                 </Button>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Use the imported AddNotificationModal component */}
//         <AddNotificationModal open={openAddModal} onOpenChange={setOpenAddModal} />
//       </div>
//     </PageContainer>
//   );
// }



'use client'

import React from "react";
import { AddNotificationModal } from "@/features/notifications/components/add-notification-modal";

export default function NotificationsPage() {
  return (
    <div>
      <AddNotificationModal />
    </div>
  );
}