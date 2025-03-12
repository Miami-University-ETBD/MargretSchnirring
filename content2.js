<script>
    // Set the date for June 1, 2028, at midnight (12:00:00 AM)
    const eventDate = new Date("June 1, 2028 00:00:00").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();
        
        // Calculate the remaining time
        const timeRemaining = eventDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown in the "timer" element
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        </script>