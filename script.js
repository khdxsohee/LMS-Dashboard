document.addEventListener('DOMContentLoaded', () => {
    const sectionTabButtons = document.querySelectorAll('.section-tabs .tab-btn');
    const courseCards = document.querySelectorAll('.course-card');

    sectionTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            sectionTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedSubject = button.textContent.trim();

            courseCards.forEach(card => {
                const subject = card.getAttribute('data-subject');

                if (selectedSubject === "All" || subject === selectedSubject) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Activate default tab (All)
    document.querySelector('.section-tabs .tab-btn.active')?.click();
});
// Filter Classes by Status
const classFilterButtons = document.querySelectorAll('.class-filters .filter-btn');
const classItems = document.querySelectorAll('.class-item');

classFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        classFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedStatus = button.textContent.trim();

        classItems.forEach(item => {
            const status = item.getAttribute('data-status');

            if (selectedStatus === "All" || status === selectedStatus) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Optional: Trigger default active button (All)
document.querySelector('.class-filters .filter-btn.active')?.click();
