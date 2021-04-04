from flask_admin.contrib.sqla import ModelView
from flask_admin import expose
from flask_login import current_user
from flask_admin.contrib.fileadmin import FileAdmin
import os.path as path


# @expose('/admin')                                                                   
# def index(self):
#     if current_user.is_authenticated and (current_user.role=='admin' or current_user.role=='researcher'):
#         print("$"*100)
#         return self.render('/admin/index.html')
#     else:   
#         print("#"*100)
#         return redirect(url_for('auth.login'))

class FileView(FileAdmin):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.role=='admin'
    
    can_upload = True
    can_delete = True 
    can_create = True
    can_edit = True
    can_delete_dirs = False
    can_mkdir = True

class UserView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.role=='admin'

    can_delete = False 
    can_create = True
    can_edit = True

    form_columns = ['email', 'role']
    column_exclude_list = ['password', 'id',]

class UserInfoView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and (current_user.role=='admin' or current_user.role=='researcher')

    can_delete = False 
    can_create = False
    can_edit = False
    can_export = True

class RatingView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.role=='admin'

    can_delete = False 
    can_create = False
    can_edit = False
    can_export = True

class TranscriptView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and (current_user.role=='admin' or current_user.role=='researcher')

    can_delete = False 
    can_create = False
    can_edit = False
    can_export = True

    column_display_pk = True

    # column_exclude_list = ['']

class PracticedPairView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and (current_user.role=='admin' or current_user.role=='researcher')

    can_delete = False 
    can_create = False
    can_edit = False
    can_export = True

class LessonContentView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.role == 'admin'

    can_delete = True 
    can_create = True
    can_edit = True
    can_export = True

class MinPairView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.role=='admin'

    can_delete = True 
    can_create = True
    can_edit = True