const Sidebar = {

  data() {
    return {
      expandedDropdowns: [ 'site' ]
    };
  },

  props: {
    user: {
      type: Object,
      default: {}
    },
  },

  methods: {
    isSelected( item ) {
      return ( this.expandedDropdowns.includes( item ) );
    },
    toggleDropdown( item ) {
      if ( this.expandedDropdowns.includes( item ) ) {
        this.expandedDropdowns = this.expandedDropdowns.filter( ( expanded ) => {
          return !( expanded === item );
        } );
      } else {
        this.expandedDropdowns.push( item );
      }
    }
  },
  computed: {
    isUserLoggedIn() {
      return ( this.user.isLoggedIn );
    },
    shouldShowSiteManagement() {
      return ( this.user.permissions.includes( 'site' ) );
    },
    shouldShowGameManagement() {
      return ( this.user.permissions.includes( 'admin' ) );
    },
    shouldShowAdminActions() {
      return ( this.isUserLoggedIn && ( this.shouldShowSiteManagement || this.shouldShowGameManagement ) );
    }
  },
};

export default Sidebar;
