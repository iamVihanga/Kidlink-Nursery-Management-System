
# 🏫 KidLink Nursery Management App - Full Feature List

---

## 🔑 1. Authentication
- Email Sign up/Login
- Forgot Password / Reset Password
- Social login (Google)
- Email Verification
- Role assignment (SuperAdmin, NurseryAdmin, Teacher, Parent)

## 📊 2. Dashboard
- Role-based dashboards (different for SuperAdmin, NurseryAdmin, Teacher, Parent)
- Quick stats (children, classes, teachers, Payments, Recent added)
- Notifications preview


## 👤 3. Profile Management
- Update profile ( name, email, phone)
- Update profile picture
- Change password

## 🔔 4. Notifications
- Create notification
- Select users or role to send notification
- Notification list with read/unread status

## 🏫 5. Nursery Management
- Nursery Settings
  - Nursery Name
  - Address
  - Phone Number
  - Email
  - Nursery Logo
  - Profile Picture
  - Theme Primary Color
  - Theme Secondary Color
  - Bank Information (Bank Name, Account Holder Name, Account Number, Swift Code, Currency, Branch)

## 🏫 6. Class Management
- Create/Edit/Delete Class
- Assign Teacher to Class

## 🧑‍🏫 7. Teacher Management
- Add/Edit/Delete Teacher
- Assign to multiple classes
- Upload optional documents
- Upload profile picture

## 👩‍👦 8. Parent & Child Management

- Add/Edit/Delete Parents 
parent entity: 
fullName, email, phoneNumber ,profilePictureUrl, assignedChildrenIds
- Add/Edit/Delete Children
fullName, dateOfBirth, gender,, photoUrl, assignedClassId, assignedTeacherId, assignedParentIds, nurseryId
- Assign children to parents and classes


## 🧾 9. Payment Receipts Management
- Parents upload payment receipts
Receipt Entity : 
id, uploadedByParentId, childId, receiptImageUrl, amount, paymentDate,approvalStatus (pending | approved | rejected),
reviewedByNurseryAdminId, reviewNotes (optional)
- Admin approve or reject receipts
- Track payment history

## 🎖️ 10. Child Badge & Progress Tracking
- Predefined Badges (Created by Nursery Admin)
id, badgeName, description, awardedDate, awardedByTeacherId childId, badgeImage, badgeColor
- Award Badges to Children (By Teachers)
Awarded Badge Entity (teacher gives to child): 
id, childId, badgeId (link to Predefined Badge), awardedByTeacherId, awardedDate
  - Select Badge
  - Award to Child

<!-- ## 📝 11. Task Management
- Create task (by Teacher)
- Assign task to one or more children
- Mark task complete/incomplete -->

## 📈 12. SaaS Subscription (Free/Paid)
- Free plan by default
- Future support for paid plans
- Subscription Entity
 userId, planType (free | pro | enterprise) ,subscriptionStartDate, subscriptionEndDate, paymentStatus (active | expired | cancelled) Default when signup = free

## 🎨 13. Theme Management
- Nursery Admin can change primary and secondary app colors

## 🔒 14. Role-based Access Control
- Super Admin: Manage everything
- Nursery Admin: Manage nursery-specific content
- Teacher: Manage assigned classes and children
- Parent: View child progress

## 🌐 15. Global App Settings
appName, appLogo, appPrivacy, appCopyRight, defaultLanguage, supportEmail, supportPhone, isMaintenanceMode
- Maintenance mode toggle
- App name configuration
- Global notification setting

---

# 📂 Folder Structure (Summary)

```plaintext
lib/
 ├── app/
 │    ├── auth/
 │    ├── dashboard/
 │    ├── profile/
 │    ├── notifications/
 │    ├── nursery/
 │    │     ├── settings/
 │    │     ├── classes/
 │    │     ├── teachers/
 │    │     ├── parents/
 │    │     ├── children/
 │    │     └── badges/        <-- Predefineds Badges
 │    ├── receipts/
 │    ├── badges/              <-- Awarded Badges
 │    ├── tasks/
 │    ├── subscription/
 │    ├── theme/
 │    ├── settings/
 │    └── roles/
 ├── core/
 ├── services/
 ├── models/
 ├── utils/
 └── main.dart
```

---

# 📌 Quick Attributes List

| Feature | Attributes |
|:--------|:-----------|
| Auth | email, password, role, profile picture |
| Dashboard | userId, role, nurseryId |
| Profile | fullName, email, phone, profilePictureUrl |
| Notifications | title, description, role or specific users |
| Nursery | name, address, logo, bank info, colors |
| Class | name, description, teacherId |
| Teacher | name, email, phone, optional documents |
| Parent | name, email, phone, children list |
| Child | name, DOB, gender, parents, teacher, class |
| Receipt | amount, image, status, parentId, childId |
| Predefined Badge | name, description, image, color |
| Awarded Badge | badgeId, childId, teacherId |
| Task | title, description, dueDate, assignedChildren |
| Subscription | planType, dates, paymentStatus |
| Theme | primaryColor, secondaryColor |
| Settings | appName, maintenance mode |

---

✅ **This document is ready for use in Notion, GitHub, or sharing with your team!**
