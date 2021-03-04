from rest_framework import serializers
from leaderboard.models import Leaderboard

# Leaderboard Serializer
class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leaderboard
        fields = "__all__"
