## Development Workflow - Instructions

To copy all files and content from the `main` branch of your boilerplate repository to the `main` branch of your blank repository, you can follow these steps using Git. This assumes both repositories are hosted on GitHub and you have appropriate access.

### Steps

1. **Clone the Blank Repository**

   ```bash
   git clone <blank-repo-url>
   cd <blank-repo-name>
   ```

   Replace `<blank-repo-url>` with the URL of your blank repository and `<blank-repo-name>` with its folder name.

2. **Add the Boilerplate Repository as a Remote**
   In the blank repository's local folder, add the boilerplate repository as a remote:

   ```bash
   git remote add boilerplate <boilerplate-repo-url>
   ```

   Replace `<boilerplate-repo-url>` with the URL of your boilerplate repository.

3. **Fetch the Boilerplate Repository's Data**
   Fetch the contents of the boilerplate repository:

   ```bash
   git fetch boilerplate
   ```

4. **Merge the Boilerplate's Main Branch into Blank's Main Branch**
   Ensure you're on the `main` branch of the blank repository:

   ```bash
   git checkout main
   ```

   Then, merge the `main` branch from the boilerplate repository:

   ```bash
   git merge boilerplate/main --allow-unrelated-histories
   ```

   The `--allow-unrelated-histories` flag is needed because the two repositories have no common history.

5. **Resolve Any Merge Conflicts (if any)**
   If there are merge conflicts, Git will pause and notify you. Open the conflicting files, resolve the conflicts manually, then mark them as resolved:

   ```bash
   git add <file>
   git commit
   ```

6. **Push the Changes to the Blank Repository**
   Push the updated `main` branch to the blank repository on GitHub:

   ```bash
   git push origin main
   ```

7. **(Optional) Remove the Boilerplate Remote**
   If you no longer need the boilerplate repository as a remote, you can remove it:
   ```bash
   git remote remove boilerplate
   ```

### Notes

- This process copies all files and commit history from the boilerplate's `main` branch to the blank repository's `main` branch.
- The blank repository's `dev` and `preview` branches remain unaffected.
- Ensure you have write access to both repositories.
- If you don’t want the boilerplate’s commit history, you can copy the files manually (e.g., via `git archive` or direct file copy) and commit them as a new commit in the blank repository. Let me know if you prefer this approach!

Let me know if you encounter issues or need clarification!

---

## Organizational Roles Mapping

1. Platform Level Roles

- Admin (System Admin)
- User (System User)

2. Organization Roles

- Owner -> Nursery Admin
- Admin -> Teacher
- Member -> Parent

# Credentials

- Admin
  email: admin@kidlink.app
  password: kidlinkAdmin

- User
  email: user@kidlink.app
  password: kidlinkUser

- Teacher
  email: teacher@kidlink.app
  password: kidlinkTeacher

- Parent
  email: parent@kidlink.app
  password: kidlinkParent
