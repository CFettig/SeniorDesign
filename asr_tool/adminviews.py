from flask_admin.contrib.sqla import ModelView
from flask_login import current_user

class UserView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.role=='admin'

    can_delete = False 
    can_create = True
    can_edit = True

    column_exclude_list = ['password', 'id',]

class UserInfoView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and (current_user.role=='admin' or current_user.role=='researcher')

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