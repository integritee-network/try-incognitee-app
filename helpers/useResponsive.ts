import { ref, onMounted, onUnmounted } from 'vue'
import { eventBus } from '@/helpers/eventBus'

export function useResponsive() {
  const isMobile = ref(false)
  const isMediumScreen = ref(false)
  const isLargeScreen = ref(false)
  const isSidebarOpen = ref(false)

  const updateMobileState = () => {
    const wasMobile = isMobile.value;
    const wasMedium = isMediumScreen.value;
    
    // Update screen size states
    isMobile.value = window.innerWidth < 1024;
    isMediumScreen.value = window.innerWidth >= 1024 && window.innerWidth < 1300;
    isLargeScreen.value = window.innerWidth >= 1500;
    
    // When switching to mobile, close the sidebar for better UX
    if (!wasMobile && isMobile.value) {
      isSidebarOpen.value = false;
      // Also adjust any mobile-specific UI elements as needed
      // This ensures a clean transition to mobile layout
    } else if (wasMobile && !isMobile.value) {
      // When switching back to desktop or medium screen
      // For medium screens, we might want different sidebar behavior
      if (isMediumScreen.value) {
        // In medium screens, we should handle layout differently
        isSidebarOpen.value = false; // Hide main sidebar on medium screens
      } else {
        // On larger screens, show the sidebar
        isSidebarOpen.value = true;
      }
    }
    
    // Handle transitions between medium screens and larger screens
    if (!wasMedium && isMediumScreen.value) {
      // Just entered medium screen range from larger screen
      isSidebarOpen.value = false; // Hide main sidebar
    } else if (wasMedium && !isMediumScreen.value && !isMobile.value) {
      // Just left medium screen to larger screen
      if (isLargeScreen.value) {
        isSidebarOpen.value = true; // Show main sidebar on large screens
      } else {
        isSidebarOpen.value = true; // Show main sidebar again
      }
    }
  }

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  onMounted(() => {
    updateMobileState()
    window.addEventListener('resize', updateMobileState)
    eventBus.on('toggleSidebar', toggleSidebar)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateMobileState)
    eventBus.off('toggleSidebar', toggleSidebar)
  })

  return {
    isMobile,
    isMediumScreen,
    isLargeScreen,
    isSidebarOpen,
    toggleSidebar,
    updateMobileState
  }
}