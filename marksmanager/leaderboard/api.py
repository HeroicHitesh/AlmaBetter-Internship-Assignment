from leaderboard.models import Leaderboard
from rest_framework import viewsets, permissions
from .serializers import LeaderboardSerializer

# Leaderboard Viewset


class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = LeaderboardSerializer