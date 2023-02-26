from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms.models import model_to_dict
from .models import TodoModel
from .serializers import TodoSerializer


class TodoApi(APIView):
    def get(self, request):
        key = request.query_params.get("key")
        objs_comp = TodoSerializer(TodoModel.objects.filter(key=key, completed=True), many=True)
        objs_uncomp = TodoSerializer(TodoModel.objects.filter(key=key, completed=False), many=True)

        return Response({"uncompleted": objs_uncomp.data,
                         "completed": objs_comp.data})

    def post(self, request):
        title = request.data.get("title")
        key = request.data.get("key")
        obj = TodoModel.objects.create(title=title, completed=False, key=key)

        return Response(model_to_dict(obj))

    def patch(self, request):
        id = request.data.get("id")
        obj = TodoModel.objects.get(id=id)
        obj.completed = True
        obj.save()
        return Response(model_to_dict(obj))

    def delete(self, request):
        id = request.data.get("id")
        obj = TodoModel.objects.get(id=id)
        obj.delete()
        return Response(model_to_dict(obj))
