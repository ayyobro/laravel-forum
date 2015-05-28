/**
 * Generated script for New Relic Synthetics
 * Generated using se-builder with New Relic Synthetics Formatter
 *
 * Welcome to the Synthetics JavaScript IDE - Browser Edition
 * You can think of it like node.js lite. Everything you'd expect to find in a
 * node.js environment is also available here, with a few notable exceptions:
 *
 * - 'require' is limited to a useful subset of modules, get the full list from
 *   https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 *
 * - We've added a few top-level vars to the scope, all starting with '$':
 *
 *     $browser - Synthetics-flavored WebDriver session for browser automation
 *     $driver - Main WebDriver public API module
 *     $http - 'request' node.js module (for making HTTP requests)
 *     $util - Common tools to aid with grunt work
 *
 * Feel free to explore, or check out the full documentation for details:
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 */

/** CONFIGURATIONS **/

// Script-wide timeout for wait and waitAndFind functions (in ms)
var DefaultTimeout = 10000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER FUNCTIONS **/

var assert = require('assert'),
  By = $driver.By,
  startTime = new Date(),
  thisStep = 0,
  VARS = {};
var log = function(msg) {
    var elapsedSecs = (new Date() - startTime) / 1000.0;
    console.log('Step ' + thisStep + ': ' + elapsedSecs.toFixed(1) + 's: ' + msg);
    thisStep++;
};
// 1st log is sometimes ignored for some reason, so this is a dummy
log('init');
function isAlertPresent() {
  try {
    var thisAlert = $browser.switchTo().alert();
    return true;
  } catch (err) { return false; }
}
function isElementSelected(el) { return $browser.findElement(el).isSelected(); }
function isTextPresentIn(text, sourceEl) {
  return sourceEl.getText()
  .then(function (wholetext) {
    log("Assert Text Present: '" + text +"'");
    assert.notEqual(wholetext.indexOf(text), -1, "Text Not Found: '" + text + "'");
  });
}

function isTextPresent(text) {
  return isTextPresentIn(text, $browser.findElement(By.tagName('html')));
}

/** BEGINNING OF SCRIPT **/

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if ((typeof UserAgent !== 'undefined') && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })

.then(function () {
  log('get "http://localhost:8000/twenty-sixteen-conference"');
  return $browser.get("http://localhost:8000/twenty-sixteen-conference");
})

.then(function () {
  log('setElementText "company_name"');
  return $browser.waitForAndFindElement(By.name("company_name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Nick Company 1"); })

.then(function () {
  log('setElementText "company_address"');
  return $browser.waitForAndFindElement(By.name("company_address"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("123 Whatever Drive"); })

.then(function () {
  log('setElementText "company_city"');
  return $browser.waitForAndFindElement(By.name("company_city"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Indianapolis"); })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[1]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[1]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[1]"))).perform(); } })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"))).perform(); } })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"))).perform(); } })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[4]/div/select//option[15]"))).perform(); } })

.then(function () {
  log('setElementText "company_zip"');
  return $browser.waitForAndFindElement(By.name("company_zip"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("46237"); })

.then(function () {
  log('setElementText "company_website"');
  return $browser.waitForAndFindElement(By.name("company_website"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("http"); })

.then(function () {
  log('setElementText "company_website"');
  return $browser.waitForAndFindElement(By.name("company_website"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("http://b-y.net"); })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[8]/div/select//option[1]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[8]/div/select//option[1]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[8]/div/select//option[1]"))).perform(); } })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[8]/div/select//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[8]/div/select//option[3]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[8]/div/select//option[3]"))).perform(); } })

.then(function () {
  log('setElementSelected "//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[9]/div/select//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[9]/div/select//option[2]"), DefaultTimeout); })
.then(function(el) { return el.isSelected(); })
.then(function(bool) { if (!bool) { $browser.actions().click($browser.findElement(By.xpath("//div[1]/form[1]/div[1]/div/div[2]/fieldset/div[1]/div[9]/div/select//option[2]"))).perform(); } })

.then(function () {
  log('setElementText "conference_contact_name"');
  return $browser.waitForAndFindElement(By.name("conference_contact_name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Nick Tester"); })

.then(function () {
  log('setElementText "conference_contact_email"');
  return $browser.waitForAndFindElement(By.name("conference_contact_email"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("nickconf1@gmail.com"); })

.then(function () {
  log('setElementText "attendee_one_name"');
  return $browser.waitForAndFindElement(By.name("attendee_one_name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Nick Bester"); })

.then(function () {
  log('setElementText "attendee_one_email"');
  return $browser.waitForAndFindElement(By.name("attendee_one_email"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("besttester@gmail.com"); })

.then(function () {
  log('clickElement "input.btn.btn-primary-green"');
  return $browser.waitForAndFindElement(By.css("input.btn.btn-primary-green"), DefaultTimeout); })
.then(function (el) { $browser.actions().click(el).perform(); })

.then(function() {
  log('Browser script execution SUCCEEDED.');
}, function(err) {
  log ('Browser script execution FAILED.');
  throw(err);
});

/** END OF SCRIPT **/