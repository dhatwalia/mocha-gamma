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

        assertPromiseEquals($('#name').getValue(), 'Prajwal D');
        assertPromiseEquals($('#state').getValue(), 'TX');
        assertPromiseEquals(backpack.isSelected(), true);
        assertPromiseEquals($('#newsletter_yes').isSelected(), true);
    });
});

function assertPromiseEquals(promise, value) {
    promise.then(function(result) {
        result.should.equal(value);
    });
}
