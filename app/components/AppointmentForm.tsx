import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function AppointmentForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#6F61C0',
            'cal-text': '#6F61C0',
            'cal-text-emphasis': '#4D408D',
            'cal-border-emphasis': '#4D408D',
            'cal-text-error': 'pink',
            'cal-border': '#A090E0',
            'cal-border-default': '#A090E0',
            'cal-border-subtle': '#A090E0',
            'cal-border-booker': '#A090E0',
            'cal-text-muted': '#C0B8FF',
            'cal-bg-emphasis': '#E1DFFF',
            // More CSS variables are defined here
            // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
          },
          dark: {
            // Set the similar variables as in light theme but for dark mode.
          },
        },
      });
    })();
  }, []);
  return (
    <div className="w-[100%] h-[700px]">
      <Cal
        calLink="vincent-lucid-design/30min"
        // style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
