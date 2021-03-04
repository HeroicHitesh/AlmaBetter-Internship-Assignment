from rest_framework import routers
from .api import LeaderboardViewSet

router = routers.DefaultRouter()
router.register("api/marks", LeaderboardViewSet, "marks")

urlpatterns = router.urls