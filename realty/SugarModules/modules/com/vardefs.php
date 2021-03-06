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
    'organizational_legal_form' => 
    array (
      'required' => '1',
      'name' => 'organizational_legal_form',
      'vname' => 'LBL_ORGANIZATIONAL_LEGAL_FORM',
      'type' => 'enum',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
      'options' => 'organizational_legal_form_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'organization_date_of_creation' => 
    array (
      'required' => false,
      'name' => 'organization_date_of_creation',
      'vname' => 'LBL_ORGANIZATION_DATE_OF_CREATION',
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
    'trade_marks' => 
    array (
      'required' => false,
      'name' => 'trade_marks',
      'vname' => 'LBL_TRADE_MARKS',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
    ),
    'contact_id_c' => 
    array (
      'required' => false,
      'name' => 'contact_id_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'the_basic_contact' => 
    array (
      'required' => '1',
      'source' => 'non-db',
      'name' => 'the_basic_contact',
      'vname' => 'LBL_THE_BASIC_CONTACT',
      'type' => 'relate',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '255',
      'id_name' => 'contact_id_c',
      'ext2' => 'Contacts',
      'module' => 'Contacts',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
    'account_id_c' => 
    array (
      'required' => false,
      'name' => 'account_id_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'the_responsible' => 
    array (
      'required' => false,
      'source' => 'non-db',
      'name' => 'the_responsible',
      'vname' => 'LBL_THE_RESPONSIBLE',
      'type' => 'relate',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '255',
      'id_name' => 'account_id_c',
      'ext2' => 'Accounts',
      'module' => 'Accounts',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
    'interest_source' => 
    array (
      'required' => false,
      'name' => 'interest_source',
      'vname' => 'LBL_INTEREST_SOURCE',
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
      'options' => 'interest_source_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'web_site' => 
    array (
      'required' => false,
      'name' => 'web_site',
      'vname' => 'LBL_WEB_SITE',
      'type' => 'url',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
      'dbType' => 'varchar',
      'gen' => '',
    ),
    'main_phone' => 
    array (
      'required' => false,
      'name' => 'main_phone',
      'vname' => 'LBL_MAIN_PHONE',
      'type' => 'phone',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
      'dbType' => 'varchar',
    ),
    'other_phone' => 
    array (
      'required' => false,
      'name' => 'other_phone',
      'vname' => 'LBL_OTHER_PHONE',
      'type' => 'phone',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
      'dbType' => 'varchar',
    ),
    'field_of_activity' => 
    array (
      'required' => false,
      'name' => 'field_of_activity',
      'vname' => 'LBL_FIELD_OF_ACTIVITY',
      'type' => 'enum',
      'massupdate' => 0,
      'default' => 'Agriculture,_hunting_and_forestry',
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
      'options' => 'field_of_activity_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'the_basic_region_of_activity' => 
    array (
      'required' => false,
      'name' => 'the_basic_region_of_activity',
      'vname' => 'LBL_THE_BASIC_REGION_OF_ACTIVITY',
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
      'options' => 'the_basic_region_of_activity_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'number_of_employees' => 
    array (
      'required' => false,
      'name' => 'number_of_employees',
      'vname' => 'LBL_NUMBER_OF_EMPLOYEES',
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
      'disable_num_format' => '1',
    ),
    'the_head_post' => 
    array (
      'required' => false,
      'name' => 'the_head_post',
      'vname' => 'LBL_THE_HEAD_POST',
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
      'options' => 'the_head_post_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'full_name' => 
    array (
      'required' => false,
      'name' => 'full_name',
      'vname' => 'LBL_FULL_NAME',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '100',
    ),
    'the_short_name' => 
    array (
      'required' => false,
      'name' => 'the_short_name',
      'vname' => 'LBL_THE_SHORT_NAME',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
    ),
    'inn' => 
    array (
      'required' => false,
      'name' => 'inn',
      'vname' => 'LBL_INN',
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
    'code_okpo' => 
    array (
      'required' => false,
      'name' => 'code_okpo',
      'vname' => 'LBL_CODE_OKPO',
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
    'kpp' => 
    array (
      'required' => false,
      'name' => 'kpp',
      'vname' => 'LBL_KPP',
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
    'p_c' => 
    array (
      'required' => false,
      'name' => 'p_c',
      'vname' => 'LBL_P_C',
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
    'ogrn' => 
    array (
      'required' => false,
      'name' => 'ogrn',
      'vname' => 'LBL_OGRN',
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
    'kc' => 
    array (
      'required' => false,
      'name' => 'kc',
      'vname' => 'LBL_KC',
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
    'bic' => 
    array (
      'required' => false,
      'name' => 'bic',
      'vname' => 'LBL_BIC',
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
    'prospect_id_c' => 
    array (
      'required' => false,
      'name' => 'prospect_id_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'prospect_id1_c' => 
    array (
      'required' => false,
      'name' => 'prospect_id1_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'contact_id1_c' => 
    array (
      'required' => false,
      'name' => 'contact_id1_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'the_chief_accountant' => 
    array (
      'required' => false,
      'source' => 'non-db',
      'name' => 'the_chief_accountant',
      'vname' => 'LBL_THE_CHIEF_ACCOUNTANT',
      'type' => 'relate',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '255',
      'id_name' => 'contact_id1_c',
      'ext2' => 'Contacts',
      'module' => 'Contacts',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
    'contact_id2_c' => 
    array (
      'required' => false,
      'name' => 'contact_id2_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'the_general_director' => 
    array (
      'required' => false,
      'source' => 'non-db',
      'name' => 'the_general_director',
      'vname' => 'LBL_THE_GENERAL_DIRECTOR',
      'type' => 'relate',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '255',
      'id_name' => 'contact_id2_c',
      'ext2' => 'Contacts',
      'module' => 'Contacts',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
    'contact_id3_c' => 
    array (
      'required' => false,
      'name' => 'contact_id3_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'the_head_names' => 
    array (
      'required' => false,
      'source' => 'non-db',
      'name' => 'the_head_names',
      'vname' => 'LBL_THE_HEAD_NAMES',
      'type' => 'relate',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '255',
      'id_name' => 'contact_id3_c',
      'ext2' => 'Contacts',
      'module' => 'Contacts',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
    'the_legal_address_city' => 
    array (
      'required' => false,
      'name' => 'the_legal_address_city',
      'vname' => 'LBL_THE_LEGAL_ADDRESS_CITY',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
    ),
    'the_legal_address_state' => 
    array (
      'required' => false,
      'name' => 'the_legal_address_state',
      'vname' => 'LBL_THE_LEGAL_ADDRESS_STATE',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
    ),
    'the_legal_address_postalcode' => 
    array (
      'required' => false,
      'name' => 'the_legal_address_postalcode',
      'vname' => 'LBL_THE_LEGAL_ADDRESS_POSTALCODE',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 20,
    ),
    'the_legal_address_country' => 
    array (
      'required' => false,
      'name' => 'the_legal_address_country',
      'vname' => 'LBL_THE_LEGAL_ADDRESS_COUNTRY',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
    ),
    'the_legal_address' => 
    array (
      'required' => false,
      'name' => 'the_legal_address',
      'vname' => 'LBL_THE_LEGAL_ADDRESS ',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
    ),
    'the_actual_address_city' => 
    array (
      'required' => false,
      'name' => 'the_actual_address_city',
      'vname' => 'LBL_THE_ACTUAL_ADDRESS_CITY',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
    ),
    'the_actual_address_state' => 
    array (
      'required' => false,
      'name' => 'the_actual_address_state',
      'vname' => 'LBL_THE_ACTUAL_ADDRESS_STATE',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
    ),
    'the_actual_address_postalcode' => 
    array (
      'required' => false,
      'name' => 'the_actual_address_postalcode',
      'vname' => 'LBL_THE_ACTUAL_ADDRESS_POSTALCODE',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 20,
    ),
    'the_actual_address_country' => 
    array (
      'required' => false,
      'name' => 'the_actual_address_country',
      'vname' => 'LBL_THE_ACTUAL_ADDRESS_COUNTRY',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
    ),
    'the_actual_address' => 
    array (
      'required' => false,
      'name' => 'the_actual_address',
      'vname' => 'LBL_THE_ACTUAL_ADDRESS',
      'type' => 'varchar',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '25',
    ),
    'd1_com_id_c' => 
    array (
      'required' => false,
      'name' => 'd1_com_id_c',
      'vname' => '',
      'type' => 'id',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => 0,
      'audited' => 0,
      'reportable' => 0,
      'len' => 36,
    ),
    'directing_agency' => 
    array (
      'required' => false,
      'source' => 'non-db',
      'name' => 'directing_agency',
      'vname' => 'LBL_DIRECTING_AGENCY',
      'type' => 'relate',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => '255',
      'id_name' => 'd1_com_id_c',
      'ext2' => 'd1_com',
      'module' => 'd1_com',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
    'email' => 
    array (
      'required' => false,
      'name' => 'email',
      'vname' => 'LBL_EMAIL',
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
      'gen' => '',
    ),
  ),
  'relationships' => 
  array (
  ),
);
?>
