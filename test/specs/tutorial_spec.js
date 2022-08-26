describe('The tutorial', () => {
    it('should explore California', () => {
        browser.url('http://explorecalifornia.org/contact.htm')

        $('#name').waitForEnabled(3000);
        $('#comments').waitForEnabled(3000);

        $('#name').setValue('Prajwal D');
        $('#state').selectByVisibleText('Texas');

        var backpack = $('#backpack');
        browser.execute('arguments[0].scrollIntoView();', backpack);
        backpack.click();

        $('#newsletter_yes').click();
    });
});
