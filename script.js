
    <script>
        // Smooth scroll untuk navigasi
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Handle form submit
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert('Terima kasih ' + name + '! Pesan Anda telah diterima. Saya akan segera menghubungi Anda di ' + email);
            
            this.reset();
        });
    </script>
