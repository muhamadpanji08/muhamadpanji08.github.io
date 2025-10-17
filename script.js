    <script>
        // Smooth scroll navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        function handleSubmit(event) {
            event.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.');
            event.target.reset();
        }

        // Navbar shadow on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.15)';
            } else {
                nav.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
            }
        });

        // Timeline animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
