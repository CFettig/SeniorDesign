from flask_admin.contrib.sqla import ModelView

class UserView(ModelView):
    can_delete = False 
    can_create = True
    can_edit = True

    column_exclude_list = ['password', 'id',]

class TranscriptView(ModelView):
    can_delete = False 
    can_create = False
    can_edit = False

    # column_exclude_list = ['']

class PracticedPairView(ModelView):
    can_delete = False 
    can_create = False
    can_edit = False

class LessonContentView(ModelView):
    can_delete = True 
    can_create = True
    can_edit = True

class MinPairView(ModelView):
    can_delete = True 
    can_create = True
    can_edit = True