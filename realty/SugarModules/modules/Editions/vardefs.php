<?php
/*********************************************************************************
 * SugarCRM is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2010 SugarCRM Inc.
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 * 
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 * 
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU General Public License version 3.
 * 
 * In accordance with Section 7(b) of the GNU General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo. If the display of the logo is not reasonably feasible for
 * technical reasons, the Appropriate Legal Notices must display the words
 * "Powered by SugarCRM".
 ********************************************************************************/
$vardefs = array (
  'fields' => 
  array (
    'date_of_the_following_publicat' => 
    array (
      'required' => '1',
      'name' => 'date_of_the_following_publicat',
      'vname' => 'LBL_DATE_OF_THE_FOLLOWING_PUBLICAT',
      'type' => 'date',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
    ),
    'the_status' => 
    array (
      'required' => '1',
      'name' => 'the_status',
      'vname' => 'LBL_THE_STATUS',
      'type' => 'enum',
      'massupdate' => 0,
      'default' => '1',
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
      'options' => 'the_status_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'email_for_sending_of_announce' => 
    array (
      'required' => '1',
      'name' => 'email_for_sending_of_announce',
      'vname' => 'LBL_EMAIL_FOR_SENDING_OF_ANNOUNCE',
      'type' => 'url',
      'massupdate' => 0,
      'default' => ' ',
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
      'dbType' => 'varchar',
      'gen' => '0',
    ),
    'limit_for_a_city' => 
    array (
      'required' => '1',
      'name' => 'limit_for_a_city',
      'vname' => 'LBL_LIMIT_FOR_A_CITY',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'freely_for_a_city' => 
    array (
      'required' => false,
      'name' => 'freely_for_a_city',
      'vname' => 'LBL_FREELY_FOR_A_CITY',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'limit_for_offcity' => 
    array (
      'required' => '1',
      'name' => 'limit_for_offcity',
      'vname' => 'LBL_LIMIT_FOR_OFFCITY',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'freely_for_offcity' => 
    array (
      'required' => false,
      'name' => 'freely_for_offcity',
      'vname' => 'LBL_FREELY_FOR_OFFCITY',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'limit_for_the_commercial_real_' => 
    array (
      'required' => '1',
      'name' => 'limit_for_the_commercial_real_',
      'vname' => 'LBL_LIMIT_FOR_THE_COMMERCIAL_REAL_',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'freely_for_the_commercial_real' => 
    array (
      'required' => false,
      'name' => 'freely_for_the_commercial_real',
      'vname' => 'LBL_FREELY_FOR_THE_COMMERCIAL_REAL',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'limit_for_office_real_estate' => 
    array (
      'required' => '1',
      'name' => 'limit_for_office_real_estate',
      'vname' => 'LBL_LIMIT_FOR_OFFICE_REAL_ESTATE',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'freely_for_office_real_estate' => 
    array (
      'required' => false,
      'name' => 'freely_for_office_real_estate',
      'vname' => 'LBL_FREELY_FOR_OFFICE_REAL_ESTATE',
      'type' => 'int',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '11',
      'disable_num_format' => '',
    ),
    'the_requirement_to_the_announc' => 
    array (
      'required' => false,
      'name' => 'the_requirement_to_the_announc',
      'vname' => 'LBL_THE_REQUIREMENT_TO_THE_ANNOUNC',
      'type' => 'text',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'studio' => 'visible',
    ),
  ),
  'relationships' => 
  array (
  ),
);
?>
