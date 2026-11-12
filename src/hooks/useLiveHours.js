import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate C&T Wok's live hours status
 * Restaurant schedule (Morrisville, NC - US Eastern Time):
 * Mon–Thu: 11:00 AM – 2:45 PM & 4:30 PM – 9:30 PM
 * Fri–Sat: 11:00 AM – 2:45 PM & 4:30 PM – 9:45 PM
 * Sun: Closed
 */
export function useLiveHours() {
  const [status, setStatus] = useState({
    isOpen: false,
    statusText: 'Checking...',
    tooltip: '',
    dayName: 'Mon'
  });

  useEffect(() => {
    function computeStatus() {
      const now = new Date();
      const options = {
        timeZone: 'America/New_York',
        hour12: false,
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit'
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);

      let dayName = 'Mon';
      let hour = 0;
      let minute = 0;

      parts.forEach(p => {
        if (p.type === 'weekday') dayName = p.value;
        if (p.type === 'hour') hour = parseInt(p.value, 10);
        if (p.type === 'minute') minute = parseInt(p.value, 10);
      });

      const timeVal = hour * 60 + minute; // minutes from midnight

      let isOpen = false;
      let statusText = 'Closed Now';
      let tooltip = '';

      if (dayName === 'Sun') {
        isOpen = false;
        statusText = 'Closed Today (Sunday)';
        tooltip = 'Closed Today (Sunday) • Opens Mon 11:00 AM';
      } else if (dayName === 'Fri' || dayName === 'Sat') {
        if (timeVal >= 660 && timeVal <= 885) {
          isOpen = true;
          statusText = 'Open (Lunch)';
          tooltip = 'Open Now (Lunch) • Closes 2:45 PM';
        } else if (timeVal >= 990 && timeVal <= 1305) {
          isOpen = true;
          statusText = 'Open (Dinner)';
          tooltip = 'Open Now (Dinner) • Closes 9:45 PM';
        } else if (timeVal < 660) {
          isOpen = false;
          statusText = 'Closed Now';
          tooltip = 'Closed • Opens Today at 11:00 AM';
        } else if (timeVal > 885 && timeVal < 990) {
          isOpen = false;
          statusText = 'Midday Break';
          tooltip = 'Midday Break • Dinner Starts 4:30 PM';
        } else {
          isOpen = false;
          statusText = 'Closed Now';
          tooltip = dayName === 'Sat' ? 'Closed • Reopens Monday 11:00 AM' : 'Closed • Opens Saturday 11:00 AM';
        }
      } else {
        // Mon, Tue, Wed, Thu
        if (timeVal >= 660 && timeVal <= 885) {
          isOpen = true;
          statusText = 'Open (Lunch)';
          tooltip = 'Open Now (Lunch) • Closes 2:45 PM';
        } else if (timeVal >= 990 && timeVal <= 1290) {
          isOpen = true;
          statusText = 'Open (Dinner)';
          tooltip = 'Open Now (Dinner) • Closes 9:30 PM';
        } else if (timeVal < 660) {
          isOpen = false;
          statusText = 'Closed Now';
          tooltip = 'Closed • Opens Today at 11:00 AM';
        } else if (timeVal > 885 && timeVal < 990) {
          isOpen = false;
          statusText = 'Midday Break';
          tooltip = 'Midday Break • Dinner Starts 4:30 PM';
        } else {
          isOpen = false;
          statusText = 'Closed Now';
          tooltip = 'Closed • Opens Tomorrow at 11:00 AM';
        }
      }

      setStatus({ isOpen, statusText, tooltip, dayName });
    }

    computeStatus();
    const timer = setInterval(computeStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return status;
}
