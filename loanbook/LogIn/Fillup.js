var React =  require('react');

var Fillup = React.createClass({
  render: function () {
    return (
      <div>
        <div className="modal-table" id="loginModal">
          <div className="modal-cell">
            <div className="modal-content signup panel-padding panel-body " id="login-modal-content">

              <div className="text-center social-links">
                Sign up with <a href="/oauth_connect?from=facebook_email_signup&amp;service=facebook">Facebook</a> or <a href="/oauth_connect?from=google_email_signup&amp;service=google">Google</a>
              </div>

              <div className="signup-or-separator">
                <span className="h6 signup-or-separator--text">or</span>
                <hr></hr>
              </div>


              <div className="signup-form-fields">
                  <input id="from" name="from" type="hidden" value="email_signup"/>
                  <input id="referral_signup_default_redirect" name="referral_signup_default_redirect" type="hidden" value="false"/>

                  <div className="control-group row-space-1" id="inputFirst">
                    <input type="text" name="user[first_name]" placeholder="First name" className="decorative-input" value=""/>
                  </div>

                  <div className="control-group row-space-1" id="inputLast">
                    <input type="text" name="user[last_name]" placeholder="Last name" className="decorative-input inspectletIgnore" value=""/>
                  </div>

                  <div className="control-group row-space-1" id="inputEmail">
                    <input type="email" name="user[email]" placeholder="Email address" value="" className="decorative-input inspectletIgnore"/>
                    <input className="empty_field_to_prevent_auto_fill"/>
                  </div>

                  <div className="control-group row-space-1" id="inputPassword">
                    <input type="password" className="empty_field_to_prevent_auto_fill"/>
                    <input type="password" id="user_password" data-hook="user_password" name="user[password]" placeholder="Password" className="decorative-input inspectletIgnore"/>
                    <div data-hook="password-strength" className="password-strength hide"></div>
                  </div>

                  <div className="control-group row-space-top-3 row-space-1">
                    <strong>Birthday</strong>
                    <strong id="birthday-signup-form-question-trigger">
                      <i className="icon icon-question"></i>
                    </strong>
                  </div>
                  <div className="control-group row-space-2">
                    <div className="select">
                      <select id="user_birthday_month" name="user[birthday_month]">
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                    <div className="select">
                      <select id="user_birthday_day" name="user[birthday_day]">
                        <option value="">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </div>
                    <div className="select">
                      <select id="user_birthday_year" name="user[birthday_year]">
                        <option value="">Year</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                        <option value="1923">1923</option>
                        <option value="1922">1922</option>
                        <option value="1921">1921</option>
                        <option value="1920">1920</option>
                        <option value="1919">1919</option>
                        <option value="1918">1918</option>
                        <option value="1917">1917</option>
                        <option value="1916">1916</option>
                        <option value="1915">1915</option>
                        <option value="1914">1914</option>
                        <option value="1913">1913</option>
                        <option value="1912">1912</option>
                        <option value="1911">1911</option>
                        <option value="1910">1910</option>
                        <option value="1909">1909</option>
                        <option value="1908">1908</option>
                        <option value="1907">1907</option>
                        <option value="1906">1906</option>
                        <option value="1905">1905</option>
                        <option value="1904">1904</option>
                        <option value="1903">1903</option>
                        <option value="1902">1902</option>
                        <option value="1901">1901</option>
                        <option value="1900">1900</option>
                        <option value="1899">1899</option>
                        <option value="1898">1898</option>
                        <option value="1897">1897</option>
                        <option value="1896">1896</option>
                      </select>
                    </div>
                  </div>
                  <label className="pull-left checkbox">
                    <input name="user_profile_info[receive_promotional_email]" type="hidden" value="0"/>
                    <input checked="checked" id="user_profile_info_receive_promotional_email" name="user_profile_info[receive_promotional_email]" type="checkbox" value="1"/>
                  </label>

                  <div className="clearfix row-space-1">
                    <label for="remember_me2" className="checkbox remember-me space-1">
                      <input type="checkbox" name="remember_me" id="remember_me2" value="true" className="remember_me"/>
                      Remember me
                    </label>
                    <a href="/forgot_password" className="forgot-password pull-right" data-from="email">Forgot password?</a>
                  </div>

                  <label for="user_profile_info_receive_promotional_email" className="checkbox">
                    I’d like to receive coupons and inspiration
                  </label>

                  <div className="row-space-2 row-space-top-2">
                    <small>By signing up, I agree to LoanBook's <a href="/terms" data-popup="true">Terms of Service</a>,
                      <a href="/terms/privacy_policy" data-popup="true">Privacy Policy</a>,
                      <a href="/terms/guest_refund_policy" data-popup="true">Guest Refund Policy</a>, and
                      <a href="/terms/host_guarantee" data-popup="true">Host Guarantee Terms</a>.
                    </small>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-large">
                      Sign up
                  </button>
              </div>
              <hr></hr>

              <div>
                <div>
                  <span>
                    Already a LoanBook member?
                  </span>
                    <a data-toggle="modal" role="button" href="#loginModal" className="modal-link link-to-login-in-signup " data-modal-href="/login_modal" data-modal-type="login">{' '}Log in</a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      );
    }

  });

module.exports = Fillup;
