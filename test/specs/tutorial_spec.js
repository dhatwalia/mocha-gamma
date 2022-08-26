describe('The tutorial', () => {
    it('should explore California', () => {
        browser.url('http://explorecalifornia.org/contact.htm')

        $('#name').waitForEnabled(3000);
        $('#comments').waitForEnabled(3000);
    });
});
