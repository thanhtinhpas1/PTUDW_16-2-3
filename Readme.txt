Run code: node app.js
Trường hợp lỗi: pm2 app.js
Trước khi run: npm install
Cây đường dẫn:

-localhost:5000

*Độc giả
    - /single-post
    - /archieve-post

*Phóng viên:
    - /writer
        - /manage-draft/post-wait
        - /manage-draft/post-refuse
        - /manage-draft/post-success
        - /manage-draft/post-approved

* Biên tập viên
    - /editor 
* Admin
    *Đường dẫn gốc
    - /admin
        - /admin/manage-category
        - /admin/manage-tag
        - /admin/manage-post
        - /admin/manage-user

* Cập nhật thông tin cá nhân
    - /login
    - /edit-profile
