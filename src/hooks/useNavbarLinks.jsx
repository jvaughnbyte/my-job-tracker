export default function useNavbarLinks(){
    const links = [
  { to: '/',            label: 'Dashboard' },
  { to: '/addJobs',       label: 'AddJobs' },
  { to: '/analytics',       label: 'Analytics' },
  { to: '/settings',     label: 'Settings' }
    ]
    return links
}