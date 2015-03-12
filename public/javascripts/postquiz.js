function postQuizQuestions(hasRecommenders, cummulativeScore, numberOfRounds)
{
	var postQuizHtmlQuiz = "<form name='postquizsurvey' method='post' action='./postquizsurvey' class='form-horizontal' role='form'><div class='form-group'>";
  
  postQuizHtmlQuiz += "<div class='form-group'><label><h2>";
  postQuizHtmlQuiz += "In this part of the survey, we are interested in how you played the game and your perception of your fellow participant. Kindly choose one of the options to each question.";
  postQuizHtmlQuiz += "</h2></label></div>";

  postQuizHtmlQuiz += "<input type='hidden' name='cummulativeScore' value='" +cummulativeScore +"'>";
  postQuizHtmlQuiz += "<input type='hidden' name='numberOfRounds' value='" + numberOfRounds +"'>";

   postQuizHtmlQuiz += "<label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how smart your associate played the game</label><div class='col-sm-4'>";

   postQuizHtmlQuiz += "<select name='smartOpponent'  class='form-control'  required='required'><option value='' selected='selected'>(please select one)</option><option value='STUPID'>He/She/It was stupid</option>"; 
   postQuizHtmlQuiz += "<option value='AVERAGE'>He/She/It played with average intelligence</option><option value='SMART'>He/She/It played very smart</option>";
   postQuizHtmlQuiz += "</select></div></div>";


   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how cooperative your associate played the game</label>";
    
   postQuizHtmlQuiz += "<div class='col-sm-4'><select name='coopOpponent'  class='form-control'  required='required'>";
   postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='NCOOP'>He/she/it was a bully</option>";
   postQuizHtmlQuiz += "<option value='LCOOP'>He/she/it was a bit cooperative</option><option value='MCOOP'>He/she/it was effectively cooperative</option>";
   postQuizHtmlQuiz += "<option value='HCOOP'>He/she/it was too cooperative (I could bully him/her/it)</option></select>";
   postQuizHtmlQuiz += "</div></div>";


   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how predictable your associate was</label>";
   postQuizHtmlQuiz += "<div class='col-sm-4'><select name='predOpponent'  class='form-control'  required='required'>";
   postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='RANDOM'>He/she/it played randomly</option>";
   postQuizHtmlQuiz += "<option value='PATTERN'>I could sometimes predict how he/she/it would play</option>";
   postQuizHtmlQuiz += "<option value='OBVIOUS'>I always knew how she he it would play</option></select>";
   postQuizHtmlQuiz += "</div></div>";
  
   postQuizHtmlQuiz += "<div class='form-group'>";
   postQuizHtmlQuiz += "<label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how 'Human' your associate was</label>";
   postQuizHtmlQuiz += "<div class='col-sm-4'><select name='humanAssociate'  class='form-control'  required='required'>";
   postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='HUMAN'>I played with another human </option>";
   postQuizHtmlQuiz += "<option value='AGENT'>I played with a software agent</option>";
   postQuizHtmlQuiz += "<option value='UNKNOWN'>I am undecided</option></select></div></div>";

   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how smart you played the game</label>";
   postQuizHtmlQuiz += "<div class='col-sm-4'><select name='smart'  class='form-control'  required='required'><option value='' selected='selected'>(please select one)</option>";
   postQuizHtmlQuiz += "<option value='STUPID'>I played stupid</option><option value='AVERAGE'>I played with average intelligence</option>";
   postQuizHtmlQuiz += "<option value='SMART'>I played very smart</option></select></div></div>";
   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how cooperative you played the game</label>";
   postQuizHtmlQuiz += "<div class='col-sm-4'><select name='coop'  class='form-control'  required='required'>";
   postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='NCOOP'>I was a bully</option>";
   postQuizHtmlQuiz += "<option value='LCOOP'>I was a bit cooperative</option><option value='MCOOP'>I was effectively cooperative</option>";
   postQuizHtmlQuiz += "<option value='HCOOP'>I was too cooperative (he/she/it could bully me)</option></select></div></div>";

   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>Rate how predictable you were</label>";
   postQuizHtmlQuiz += "<div class='col-sm-4'><select name='predictable'  class='form-control'  required='required'>";
   postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='RANDOM'>I played randomly</option>";
   postQuizHtmlQuiz += "<option value='PATTERN'>My actions were sometimes predictable</option><option value='OBVIOUS'>My actions were completely predictable</option>";
   postQuizHtmlQuiz += "</select></div></div>";


   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'><b>In brief</b>, describe the strategy you used in the game.</label>";
   postQuizHtmlQuiz += "<div class='col-sm-4'><textarea name='strategy' rows='3' cols='60' required='required' maxlength='200'></textarea></div></div>";

   postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>(optional) <b>In brief</b>, what strategy do you think your associate used.</label>";
    
   postQuizHtmlQuiz += "<div class='col-sm-4'><textarea name='strategyOpponent' rows='3' cols='60' maxlength='200'></textarea></div></div>";

if(hasRecommenders)
{
    postQuizHtmlQuiz += "<div class='row'><label><h2>";
  postQuizHtmlQuiz += "In this part of the survey, please answer the following questions if you had options suggested to you during the action phase of  each round. If otherwise, kindly skip this part.  Each question has a different scale to be used";
  postQuizHtmlQuiz += "</h2></label></div>";
	postQuizHtmlQuiz += "<div id='hasRecommenders'><div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>Did you find the recommendation useful?</label>";
    
    postQuizHtmlQuiz += "<div class='col-sm-4'><select name='usefulRecommendation'  class='form-control'>";
    postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='0'>Not at all</option>";
    postQuizHtmlQuiz += "<option value='1'>Rarely</option><option value='2'>Sometimes</option><option value='3'>Frequently</option>";
    postQuizHtmlQuiz += "<option value='4'>Very useful</option></select></div></div>";

    postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-6 control-label'>How often did you follow the recommendation?</label>";
    postQuizHtmlQuiz += "<div class='col-sm-4'><select name='followRecommendation'  class='form-control'>";
    postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='0'>Not at all</option>";
    postQuizHtmlQuiz += "<option value='1'>Rarely</option><option value='2'>Sometimes</option><option value='3'>Frequently</option>";
    postQuizHtmlQuiz += "<option value='4'>Very useful</option></select></div></div></div> ";	
}

    postQuizHtmlQuiz += "<div class='form-group'><label><h2>";
  postQuizHtmlQuiz += "In this part of the survey, we will be asking questions related to your demography";
  postQuizHtmlQuiz += "</h2></label></div>";

postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-2 control-label'>Age(years)</label><input type='hidden' name='q0' value='age'/>";  
postQuizHtmlQuiz += "<div class='col-sm-10'><input name='age' type='number' class='form-control' size='2' maxLength='2'/> <input type='checkbox' name='a0' />  I prefer not to answer</div></div>";

postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-2 control-label'> Gender:</label>";
postQuizHtmlQuiz += "<div class='col-sm-10'><input type='hidden' name='q1' value='gender'/><select name='gender' required='required' class='form-control' >";
postQuizHtmlQuiz += "<option value='' selected>(please select one)</option><option value='M'>Male</option>";
postQuizHtmlQuiz += "<option value='F'>Female</option><option value='-'>(I prefer to not answer)</option></select>";
postQuizHtmlQuiz += "</div></div><div class='form-group'>";
postQuizHtmlQuiz += "<label for='exampleInputEmail1' class='col-sm-2 control-label'>Nationality: </label><div class='col-sm-10'>";
postQuizHtmlQuiz += "<input type='hidden' name='q2' value='nationality'/><select name='nationality' class='form-control'>";
postQuizHtmlQuiz += "<option value='' selected>(please select a country)</option><option value='AF'>Afghanistan</option>";
postQuizHtmlQuiz += "<option value='AL'>Albania</option>";
postQuizHtmlQuiz += "<option value='DZ'>Algeria</option>";
postQuizHtmlQuiz += "<option value='AS'>American Samoa</option>";
postQuizHtmlQuiz += "<option value='AD'>Andorra</option>";
postQuizHtmlQuiz += "<option value='AO'>Angola</option>";
postQuizHtmlQuiz += "<option value='AI'>Anguilla</option>";
postQuizHtmlQuiz += "<option value='AQ'>Antarctica</option>";
postQuizHtmlQuiz += "<option value='AG'>Antigua and Barbuda</option>";
postQuizHtmlQuiz += "<option value='AR'>Argentina</option>";
postQuizHtmlQuiz += "<option value='AM'>Armenia</option>";
postQuizHtmlQuiz += "<option value='AW'>Aruba</option>";
postQuizHtmlQuiz += "<option value='AU'>Australia</option>";
postQuizHtmlQuiz += "    <option value='AT'>Austria</option>";

    postQuizHtmlQuiz += "<option value='AZ'>Azerbaijan</option>";
    postQuizHtmlQuiz += "<option value='BS'>Bahamas</option>";
    postQuizHtmlQuiz += "<option value='BH'>Bahrain</option>";
    postQuizHtmlQuiz += "<option value='BD'>Bangladesh</option>";
    postQuizHtmlQuiz += "<option value='BB'>Barbados</option>";
    postQuizHtmlQuiz += "<option value='BY'>Belarus</option>";
    postQuizHtmlQuiz += "<option value='BE'>Belgium</option>";
    postQuizHtmlQuiz += "<option value='BZ'>Belize</option>";
    postQuizHtmlQuiz += "<option value='BJ'>Benin</option>";
    postQuizHtmlQuiz += "<option value='BM'>Bermuda</option>";
    postQuizHtmlQuiz += "<option value='BT'>Bhutan</option>";
    postQuizHtmlQuiz += "<option value='BO'>Bolivia</option>";
    postQuizHtmlQuiz += "<option value='BA'>Bosnia and Herzegowina</option>";
    postQuizHtmlQuiz += "<option value='BW'>Botswana</option>";
    postQuizHtmlQuiz += "<option value='BV'>Bouvet Island</option>";
    postQuizHtmlQuiz += "<option value='BR'>Brazil</option>";
    postQuizHtmlQuiz += "<option value='IO'>British Indian Ocean Territory</option>";
    postQuizHtmlQuiz += "<option value='BN'>Brunei Darussalam</option>";
    postQuizHtmlQuiz += "<option value='BG'>Bulgaria</option>";
    postQuizHtmlQuiz += "<option value='BF'>Burkina Faso</option>";
    postQuizHtmlQuiz += "<option value='BI'>Burundi</option>";
    postQuizHtmlQuiz += "<option value='KH'>Cambodia</option>";
    postQuizHtmlQuiz += "<option value='CM'>Cameroon</option>";
    postQuizHtmlQuiz += "<option value='CA'>Canada</option>";
    postQuizHtmlQuiz += "<option value='CV'>Cape Verde</option>";
    postQuizHtmlQuiz += "<option value='KY'>Cayman Islands</option>";
    postQuizHtmlQuiz += "<option value='CF'>Central African Republic</option>";
    postQuizHtmlQuiz += "<option value='TD'>Chad</option>";
    postQuizHtmlQuiz += "<option value='CL'>Chile</option>";
    postQuizHtmlQuiz += "<option value='CN'>China</option>";
    postQuizHtmlQuiz += "<option value='CX'>Christmas Island</option>";
    postQuizHtmlQuiz += "<option value='CC'>Cocos (Keeling) Islands</option>";
    postQuizHtmlQuiz += "<option value='CO'>Colombia</option>";
    postQuizHtmlQuiz += "<option value='KM'>Comoros</option>";
    postQuizHtmlQuiz += "<option value='CG'>Congo</option>";
    postQuizHtmlQuiz += "<option value='CD'>Congo, the Democratic Republic of the</option>";
    postQuizHtmlQuiz += "<option value='CK'>Cook Islands</option>";
    postQuizHtmlQuiz += "<option value='CR'>Costa Rica</option>";
    postQuizHtmlQuiz += "<option value='CI'>Cote d'Ivoire</option>";
    postQuizHtmlQuiz += "<option value='HR'>Croatia (Hrvatska)</option>";
    postQuizHtmlQuiz += "<option value='CU'>Cuba</option>";
    postQuizHtmlQuiz += "<option value='CY'>Cyprus</option>";
    postQuizHtmlQuiz += "<option value='CZ'>Czech Republic</option>";
    postQuizHtmlQuiz += "<option value='DK'>Denmark</option>";
    postQuizHtmlQuiz += "<option value='DJ'>Djibouti</option>";
    postQuizHtmlQuiz += "<option value='DM'>Dominica</option>";
    postQuizHtmlQuiz += "<option value='DO'>Dominican Republic</option>";
    postQuizHtmlQuiz += "<option value='TP'>East Timor</option>";
    postQuizHtmlQuiz += "<option value='EC'>Ecuador</option>";
    postQuizHtmlQuiz += "<option value='EG'>Egypt</option>";
    postQuizHtmlQuiz += "<option value='SV'>El Salvador</option>";
    postQuizHtmlQuiz += "<option value='GQ'>Equatorial Guinea</option>";
    postQuizHtmlQuiz += "<option value='ER'>Eritrea</option>";
    postQuizHtmlQuiz += "<option value='EE'>Estonia</option>";
    postQuizHtmlQuiz += "<option value='ET'>Ethiopia</option>";
    postQuizHtmlQuiz += "<option value='FK'>Falkland Islands (Malvinas)</option>";
    postQuizHtmlQuiz += "<option value='FO'>Faroe Islands</option>";
    postQuizHtmlQuiz += "<option value='FJ'>Fiji</option>";
    postQuizHtmlQuiz += "<option value='FI'>Finland</option>";
    postQuizHtmlQuiz += "<option value='FR'>France</option>";
    postQuizHtmlQuiz += "<option value='FX'>France, Metropolitan</option>";
    postQuizHtmlQuiz += "<option value='GF'>French Guiana</option>";
    postQuizHtmlQuiz += "<option value='PF'>French Polynesia</option>";
    postQuizHtmlQuiz += "<option value='TF'>French Southern Territories</option>";
    postQuizHtmlQuiz += "<option value='GA'>Gabon</option>";
    postQuizHtmlQuiz += "<option value='GM'>Gambia</option>";
    postQuizHtmlQuiz += "<option value='GE'>Georgia</option>";
    postQuizHtmlQuiz += "<option value='DE'>Germany</option>";
    postQuizHtmlQuiz += "<option value='GH'>Ghana</option>";
    postQuizHtmlQuiz += "<option value='GI'>Gibraltar</option>";
    postQuizHtmlQuiz += "<option value='GR'>Greece</option>";
    postQuizHtmlQuiz += "<option value='GL'>Greenland</option>";
    postQuizHtmlQuiz += "<option value='GD'>Grenada</option>";
    postQuizHtmlQuiz += "<option value='GP'>Guadeloupe</option>";
    postQuizHtmlQuiz += "<option value='GU'>Guam</option>";
    postQuizHtmlQuiz += "<option value='GT'>Guatemala</option>";
    postQuizHtmlQuiz += "<option value='GN'>Guinea</option>";
    postQuizHtmlQuiz += "<option value='GW'>Guinea-Bissau</option>";
    postQuizHtmlQuiz += "<option value='GY'>Guyana</option>";
    postQuizHtmlQuiz += "<option value='HT'>Haiti</option>";
    postQuizHtmlQuiz += "<option value='HM'>Heard and Mc Donald Islands</option>";
    postQuizHtmlQuiz += "<option value='VA'>Holy See (Vatican City State)</option>";
    postQuizHtmlQuiz += "<option value='HN'>Honduras</option>";
    postQuizHtmlQuiz += "<option value='HK'>Hong Kong</option>";
    postQuizHtmlQuiz += "<option value='HU'>Hungary</option>";
    postQuizHtmlQuiz += "<option value='IS'>Iceland</option>";
    postQuizHtmlQuiz += "<option value='IN'>India</option>";
    postQuizHtmlQuiz += "<option value='ID'>Indonesia</option>";
    postQuizHtmlQuiz += "<option value='IR'>Iran (Islamic Republic of)</option>";
    postQuizHtmlQuiz += "<option value='IQ'>Iraq</option>";
    postQuizHtmlQuiz += "<option value='IE'>Ireland</option>";
    postQuizHtmlQuiz += "<option value='IL'>Israel</option>";
    postQuizHtmlQuiz += "<option value='IT'>Italy</option>";
    postQuizHtmlQuiz += "<option value='JM'>Jamaica</option>";
    postQuizHtmlQuiz += "<option value='JP'>Japan</option>";
    postQuizHtmlQuiz += "<option value='JO'>Jordan</option>";
    postQuizHtmlQuiz += "<option value='KZ'>Kazakhstan</option>";
    postQuizHtmlQuiz += "<option value='KE'>Kenya</option>";
    postQuizHtmlQuiz += "<option value='KI'>Kiribati</option>";
    postQuizHtmlQuiz += "<option value='KP'>Korea, Democratic People's Republic of</option>";
    postQuizHtmlQuiz += "<option value='KR'>Korea, Republic of</option>";
    postQuizHtmlQuiz += "<option value='KW'>Kuwait</option>";
    postQuizHtmlQuiz += "<option value='KG'>Kyrgyzstan</option>";
    postQuizHtmlQuiz += "<option value='LA'>Lao People's Democratic Republic</option>";
    postQuizHtmlQuiz += "<option value='LV'>Latvia</option>";
    postQuizHtmlQuiz += "<option value='LB'>Lebanon</option>";
    postQuizHtmlQuiz += "<option value='LS'>Lesotho</option>";
    postQuizHtmlQuiz += "<option value='LR'>Liberia</option>";
    postQuizHtmlQuiz += "<option value='LY'>Libyan Arab Jamahiriya</option>";
    postQuizHtmlQuiz += "<option value='LI'>Liechtenstein</option>";
    postQuizHtmlQuiz += "<option value='LT'>Lithuania</option>";
    postQuizHtmlQuiz += "<option value='LU'>Luxembourg</option>";
    postQuizHtmlQuiz += "<option value='MO'>Macau</option>";
    postQuizHtmlQuiz += "<option value='MK'>Macedonia, The Former Yugoslav Republic of</option>";
    postQuizHtmlQuiz += "<option value='MG'>Madagascar</option>";
    postQuizHtmlQuiz += "<option value='MW'>Malawi</option>";
    postQuizHtmlQuiz += "<option value='MY'>Malaysia</option>";
    postQuizHtmlQuiz += "<option value='MV'>Maldives</option>";
    postQuizHtmlQuiz += "<option value='ML'>Mali</option>";
    postQuizHtmlQuiz += "<option value='MT'>Malta</option>";
    postQuizHtmlQuiz += "<option value='MH'>Marshall Islands</option>";
    postQuizHtmlQuiz += "<option value='MQ'>Martinique</option>";
    postQuizHtmlQuiz += "<option value='MR'>Mauritania</option>";
    postQuizHtmlQuiz += "<option value='MU'>Mauritius</option>";
    postQuizHtmlQuiz += "<option value='YT'>Mayotte</option>";
    postQuizHtmlQuiz += "<option value='MX'>Mexico</option>";
    postQuizHtmlQuiz += "<option value='FM'>Micronesia, Federated States of</option>";
    postQuizHtmlQuiz += "<option value='MD'>Moldova, Republic of</option>";
    postQuizHtmlQuiz += "<option value='MC'>Monaco</option>";
    postQuizHtmlQuiz += "<option value='MN'>Mongolia</option>";
    postQuizHtmlQuiz += "<option value='MS'>Montserrat</option>";
    postQuizHtmlQuiz += "<option value='MA'>Morocco</option>";
    postQuizHtmlQuiz += "<option value='MZ'>Mozambique</option>";
    postQuizHtmlQuiz += "<option value='MM'>Myanmar</option>";
    postQuizHtmlQuiz += "<option value='NA'>Namibia</option>";
    postQuizHtmlQuiz += "<option value='NR'>Nauru</option>";
    postQuizHtmlQuiz += "<option value='NP'>Nepal</option>";
    postQuizHtmlQuiz += "<option value='NL'>Netherlands</option>";
    postQuizHtmlQuiz += "<option value='AN'>Netherlands Antilles</option>";
    postQuizHtmlQuiz += "<option value='NC'>New Caledonia</option>";
    postQuizHtmlQuiz += "<option value='NZ'>New Zealand</option>";
    postQuizHtmlQuiz += "<option value='NI'>Nicaragua</option>";
    postQuizHtmlQuiz += "<option value='NE'>Niger</option>";
    postQuizHtmlQuiz += "<option value='NG'>Nigeria</option>";
    postQuizHtmlQuiz += "<option value='NU'>Niue</option>";
    postQuizHtmlQuiz += "<option value='NF'>Norfolk Island</option>";
    postQuizHtmlQuiz += "<option value='MP'>Northern Mariana Islands</option>";
    postQuizHtmlQuiz += "<option value='NO'>Norway</option>";
    postQuizHtmlQuiz += "<option value='OM'>Oman</option>";
    postQuizHtmlQuiz += "<option value='PK'>Pakistan</option>";
    postQuizHtmlQuiz += "<option value='PW'>Palau</option>";
    postQuizHtmlQuiz += "<option value='PA'>Panama</option>";
    postQuizHtmlQuiz += "<option value='PG'>Papua New Guinea</option>";
    postQuizHtmlQuiz += "<option value='PY'>Paraguay</option>";
    postQuizHtmlQuiz += "<option value='PE'>Peru</option>";
    postQuizHtmlQuiz += "<option value='PH'>Philippines</option>";
    postQuizHtmlQuiz += "<option value='PN'>Pitcairn</option>";
    postQuizHtmlQuiz += "<option value='PL'>Poland</option>";
    postQuizHtmlQuiz += "<option value='PT'>Portugal</option>";
    postQuizHtmlQuiz += "<option value='PR'>Puerto Rico</option>";
    postQuizHtmlQuiz += "<option value='QA'>Qatar</option>";
    postQuizHtmlQuiz += "<option value='RE'>Reunion</option>";
    postQuizHtmlQuiz += "<option value='RO'>Romania</option>";
    postQuizHtmlQuiz += "<option value='RU'>Russian Federation</option>";
    postQuizHtmlQuiz += "<option value='RW'>Rwanda</option>";
    postQuizHtmlQuiz += "<option value='KN'>Saint Kitts and Nevis</option>"; 
    postQuizHtmlQuiz += "<option value='LC'>Saint LUCIA</option>";
    postQuizHtmlQuiz += "<option value='VC'>Saint Vincent and the Grenadines</option>";
    postQuizHtmlQuiz += "<option value='WS'>Samoa</option>";
    postQuizHtmlQuiz += "<option value='SM'>San Marino</option>";
    postQuizHtmlQuiz += "<option value='ST'>Sao Tome and Principe</option>"; 
    postQuizHtmlQuiz += "<option value='SA'>Saudi Arabia</option>";
    postQuizHtmlQuiz += "<option value='SN'>Senegal</option>";
    postQuizHtmlQuiz += "<option value='SC'>Seychelles</option>";
    postQuizHtmlQuiz += "<option value='SL'>Sierra Leone</option>";
    postQuizHtmlQuiz += "<option value='SG'>Singapore</option>";
    postQuizHtmlQuiz += "<option value='SK'>Slovakia (Slovak Republic)</option>";
    postQuizHtmlQuiz += "<option value='SI'>Slovenia</option>";
    postQuizHtmlQuiz += "<option value='SB'>Solomon Islands</option>";
    postQuizHtmlQuiz += "<option value='SO'>Somalia</option>";
    postQuizHtmlQuiz += "<option value='ZA'>South Africa</option>";
    postQuizHtmlQuiz += "<option value='GS'>South Georgia and the South Sandwich Islands</option>";
    postQuizHtmlQuiz += "<option value='ES'>Spain</option>";
    postQuizHtmlQuiz += "<option value='LK'>Sri Lanka</option>";
    postQuizHtmlQuiz += "<option value='SH'>St. Helena</option>";
    postQuizHtmlQuiz += "<option value='PM'>St. Pierre and Miquelon</option>";
    postQuizHtmlQuiz += "<option value='SD'>Sudan</option>";
    postQuizHtmlQuiz += "<option value='SR'>Suriname</option>";
    postQuizHtmlQuiz += "<option value='SJ'>Svalbard and Jan Mayen Islands</option>";
    postQuizHtmlQuiz += "<option value='SZ'>Swaziland</option>";
    postQuizHtmlQuiz += "<option value='SE'>Sweden</option>";
    postQuizHtmlQuiz += "<option value='CH'>Switzerland</option>";
    postQuizHtmlQuiz += "<option value='SY'>Syrian Arab Republic</option>";
    postQuizHtmlQuiz += "<option value='TW'>Taiwan, Province of China</option>";
    postQuizHtmlQuiz += "<option value='TJ'>Tajikistan</option>";
    postQuizHtmlQuiz += "<option value='TZ'>Tanzania, United Republic of</option>";
    postQuizHtmlQuiz += "<option value='TH'>Thailand</option>";
    postQuizHtmlQuiz += "<option value='TG'>Togo</option>";
    postQuizHtmlQuiz += "<option value='TK'>Tokelau</option>";
    postQuizHtmlQuiz += "<option value='TO'>Tonga</option>";
    postQuizHtmlQuiz += "<option value='TT'>Trinidad and Tobago</option>";
    postQuizHtmlQuiz += "<option value='TN'>Tunisia</option>";
    postQuizHtmlQuiz += "<option value='TR'>Turkey</option>";
    postQuizHtmlQuiz += "<option value='TM'>Turkmenistan</option>";
    postQuizHtmlQuiz += "<option value='TC'>Turks and Caicos Islands</option>";
    postQuizHtmlQuiz += "<option value='TV'>Tuvalu</option>";
    postQuizHtmlQuiz += "<option value='UG'>Uganda</option>";
    postQuizHtmlQuiz += "<option value='UA'>Ukraine</option>";
    postQuizHtmlQuiz += "<option value='AE'>United Arab Emirates</option>";
    postQuizHtmlQuiz += "<option value='GB'>United Kingdom</option>";
    postQuizHtmlQuiz += "<option value='US'>United States</option>";
    postQuizHtmlQuiz += "<option value='UM'>United States Minor Outlying Islands</option>";
    postQuizHtmlQuiz += "<option value='UY'>Uruguay</option>";
    postQuizHtmlQuiz += "<option value='UZ'>Uzbekistan</option>";
    postQuizHtmlQuiz += "<option value='VU'>Vanuatu</option>";
    postQuizHtmlQuiz += "<option value='VE'>Venezuela</option>";
    postQuizHtmlQuiz += "<option value='VN'>Viet Nam</option>";
    postQuizHtmlQuiz += "<option value='VG'>Virgin Islands (British)</option>";
    postQuizHtmlQuiz += "<option value='VI'>Virgin Islands (U.S.)</option>";
    postQuizHtmlQuiz += "<option value='WF'>Wallis and Futuna Islands</option>";
    postQuizHtmlQuiz += "<option value='EH'>Western Sahara</option>";
    postQuizHtmlQuiz += "<option value='YE'>Yemen</option>";
    postQuizHtmlQuiz += "<option value='YU'>Yugoslavia</option>";
    postQuizHtmlQuiz += "<option value='ZM'>Zambia</option>";
    postQuizHtmlQuiz += "<option value='ZW'>Zimbabwe</option>";
    postQuizHtmlQuiz += "<option value='-'>(I prefer to not answer)</option>";

    postQuizHtmlQuiz += "</select></div></div><div class='form-group'><label for='exampleInputEmail1' class='col-sm-2 control-label'>Qualification:</label>";
    postQuizHtmlQuiz += "<div class='col-sm-10'><input type='hidden' name='q3' value='qualification'/><select name='qualification' required='required' class='form-control'>";
    postQuizHtmlQuiz += "<option value='' selected='selected'>(please select one)</option><option value='HS'>High School</option>";
    postQuizHtmlQuiz += "<option value='UG'>Undergraduate/Bachelors</option> <option value='GR'>Graduate/Masters/PhD</option><option value='NONE'>None</option>";
    postQuizHtmlQuiz += "<option value='-'>(I prefer to not answer)</option></select></div></div>";

    postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-2 control-label'>Major Field</label>";
    postQuizHtmlQuiz += "<div class='col-sm-10'><input type='hidden' name='q4' value='FIELD'/>";
    postQuizHtmlQuiz += "<select name='field' required='required' class='form-control'><option value='' selected='selected'>(please select one)</option>";
    postQuizHtmlQuiz += "<option value='CSM'>Computer Science or Mathematics</option><option value='OSE'>Other Science or Engineering</option>";
    postQuizHtmlQuiz += "<option value='OTHER'>Other</option><option value='NONE'>None</option><option value='-'>(I prefer to not answer)</option>";
    postQuizHtmlQuiz += "</select></div></div>";
    postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-2 control-label'>How familiar are you with game theory?</label>";
    postQuizHtmlQuiz += "<div class='col-sm-10'><input type='hidden' name='q5' value='FAMILIARITY'/>";
    postQuizHtmlQuiz += "<select name='familiarity' required='required' class='form-control'><option value='' selected='selected'>(please select one)</option>";
    postQuizHtmlQuiz += "<option value='NEVER'>I've never heard of it</option><option value='HEARD'>I've heard people talk about it</option>";
    postQuizHtmlQuiz += "<option value='READ'>I've read or talked about some details of game theory</option>";
    postQuizHtmlQuiz += "<option value='STUDIED'>I took a class on game theory</option><option value='EXPERT'>I'm obsessed with game theory</option>";
    postQuizHtmlQuiz += "<option value='-'>(I prefer to not answer)</option></select></div></div>";
    postQuizHtmlQuiz += "<div class='form-group'><label for='exampleInputEmail1' class='col-sm-2 control-label'>Have you played a matrix game before today?</label>";
    postQuizHtmlQuiz += "<div class='col-sm-10'><input type='hidden' name='q6' value='EXPERIENCE'/>";
    postQuizHtmlQuiz += "<select name='experience' required='required' class='form-control'><option value='' selected='selected'>(please select one)</option>";
    postQuizHtmlQuiz += "<option value='NONE'>Never</option><option value='LOW'>Once or twice</option>";
    postQuizHtmlQuiz += "<option value='HIGH'>Many times</option><option value='-'>(I prefer to not answer)</option>"
    postQuizHtmlQuiz += "</select></div></div>";





postQuizHtmlQuiz += " <div class='form-group'><div class='col-sm-offset-6 col-sm-6'>";
postQuizHtmlQuiz += "<input name='proceed' type='submit' class='btn btn-primary' value='Go To Payment'/></div></div>";

return postQuizHtmlQuiz;
}