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
    'transaction_subject' => 
    array (
      'required' => '1',
      'name' => 'transaction_subject',
      'vname' => 'LBL_TRANSACTION_SUBJECT',
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
      'options' => 'transaction_subject_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'operation' => 
    array (
      'required' => '1',
      'name' => 'operation',
      'vname' => 'LBL_OPERATION',
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
      'options' => 'operation_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'interest_source' => 
    array (
      'required' => '1',
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
    'phone_for_communication' => 
    array (
      'required' => false,
      'name' => 'phone_for_communication',
      'vname' => 'LBL_PHONE_FOR_COMMUNICATION',
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
      'gen' => '0',
    ),
    'id_object' => 
    array (
      'required' => false,
      'name' => 'id_object',
      'vname' => 'LBL_ID_OBJECT',
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
    'choice_for_itself_the_client' => 
    array (
      'required' => '1',
      'name' => 'choice_for_itself_the_client',
      'vname' => 'LBL_CHOICE_FOR_ITSELF_THE_CLIENT',
      'type' => 'radioenum',
      'massupdate' => 0,
      'default' => 'itself',
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 100,
      'options' => 'choice_for_itself_the_client_list',
      'studio' => 'visible',
      'dbType' => 'enum',
      'separator' => '<br>',
    ),
    'district' => 
    array (
      'required' => false,
      'name' => 'district',
      'vname' => 'LBL_DISTRICT',
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
      'options' => 'district_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'toponymic_area' => 
    array (
      'required' => false,
      'name' => 'toponymic_area',
      'vname' => 'LBL_TOPONYMIC_AREA',
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
      'options' => 'toponymic_area_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'territorial_arrangement' => 
    array (
      'required' => false,
      'name' => 'territorial_arrangement',
      'vname' => 'LBL_TERRITORIAL_ARRANGEMENT',
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
      'options' => 'territorial_arrangement_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'highway' => 
    array (
      'required' => false,
      'name' => 'highway',
      'vname' => 'LBL_HIGHWAY',
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
      'options' => 'highway_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'distance_from_mkad' => 
    array (
      'required' => false,
      'name' => 'distance_from_mkad',
      'vname' => 'LBL_DISTANCE_FROM_MKAD',
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
    'the_address_of_offered_object_city' => 
    array (
      'required' => false,
      'name' => 'the_address_of_offered_object_city',
      'vname' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT_CITY',
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
    'the_address_of_offered_object_state' => 
    array (
      'required' => false,
      'name' => 'the_address_of_offered_object_state',
      'vname' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT_STATE',
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
    'the_address_of_offered_object_postalcode' => 
    array (
      'required' => false,
      'name' => 'the_address_of_offered_object_postalcode',
      'vname' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT_POSTALCODE',
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
    'the_address_of_offered_object_country' => 
    array (
      'required' => false,
      'name' => 'the_address_of_offered_object_country',
      'vname' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT_COUNTRY',
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
    'the_address_of_offered_object' => 
    array (
      'required' => false,
      'name' => 'the_address_of_offered_object',
      'vname' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT',
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
    'the_address_city' => 
    array (
      'required' => false,
      'name' => 'the_address_city',
      'vname' => 'LBL_THE_ADDRESS_CITY',
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
    'the_address_state' => 
    array (
      'required' => false,
      'name' => 'the_address_state',
      'vname' => 'LBL_THE_ADDRESS_STATE',
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
    'the_address_postalcode' => 
    array (
      'required' => false,
      'name' => 'the_address_postalcode',
      'vname' => 'LBL_THE_ADDRESS_POSTALCODE',
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
    'the_address_country' => 
    array (
      'required' => false,
      'name' => 'the_address_country',
      'vname' => 'LBL_THE_ADDRESS_COUNTRY',
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
    'the_address' => 
    array (
      'required' => false,
      'name' => 'the_address',
      'vname' => 'LBL_THE_ADDRESS',
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
    'de_territorial_arrangement' => 
    array (
      'required' => false,
      'name' => 'de_territorial_arrangement',
      'vname' => 'LBL_DE_TERRITORIAL_ARRANGEMENT',
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
      'options' => 'territorial_arrangement_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'de_highway' => 
    array (
      'required' => false,
      'name' => 'de_highway',
      'vname' => 'LBL_DE_HIGHWAY',
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
      'options' => 'highway_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'de_district' => 
    array (
      'required' => false,
      'name' => 'de_district',
      'vname' => 'LBL_DE_DISTRICT',
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
      'options' => 'district_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'distance_from_mkad_from' => 
    array (
      'required' => false,
      'name' => 'distance_from_mkad_from',
      'vname' => 'LBL_DISTANCE_FROM_MKAD_FROM',
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
    'distance_to_the_underground' => 
    array (
      'required' => false,
      'name' => 'distance_to_the_underground',
      'vname' => 'LBL_DISTANCE_TO_THE_UNDERGROUND',
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
    'distance_from_mkad_to' => 
    array (
      'required' => false,
      'name' => 'distance_from_mkad_to',
      'vname' => 'LBL_DISTANCE_FROM_MKAD_TO',
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
    'is_in' => 
    array (
      'required' => false,
      'name' => 'is_in',
      'vname' => 'LBL_IS_IN',
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
      'options' => 'is_in_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'the_area_from' => 
    array (
      'required' => false,
      'name' => 'the_area_from',
      'vname' => 'LBL_THE_AREA_FROM',
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
    'the_area_to' => 
    array (
      'required' => false,
      'name' => 'the_area_to',
      'vname' => 'LBL_THE_AREA_TO',
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
    'the_area_of_a_site_from' => 
    array (
      'required' => false,
      'name' => 'the_area_of_a_site_from',
      'vname' => 'LBL_THE_AREA_OF_A_SITE_FROM',
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
    'the_area_of_a_site_to' => 
    array (
      'required' => false,
      'name' => 'the_area_of_a_site_to',
      'vname' => 'LBL_THE_AREA_OF_A_SITE_TO',
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
    'de_toponymic_area' => 
    array (
      'required' => false,
      'name' => 'de_toponymic_area',
      'vname' => 'LBL_DE_TOPONYMIC_AREA',
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
      'options' => 'toponymic_area_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'assumption_on_the_area' => 
    array (
      'required' => false,
      'name' => 'assumption_on_the_area',
      'vname' => 'LBL_ASSUMPTION_ON_THE_AREA',
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
    'furnish_condition' => 
    array (
      'required' => false,
      'name' => 'furnish_condition',
      'vname' => 'LBL_FURNISH_CONDITION',
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
      'options' => 'furnish_condition_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'project_cost_entirely_from' => 
    array (
      'required' => false,
      'name' => 'project_cost_entirely_from',
      'vname' => 'LBL_PROJECT_COST_ENTIRELY_FROM',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'currency_id' => 
    array (
      'required' => false,
      'name' => 'currency_id',
      'vname' => 'LBL_CURRENCY',
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
      'studio' => 'visible',
      'function' => 
      array (
        'name' => 'getCurrencyDropDown',
        'returns' => 'html',
      ),
    ),
    'cost_currency' => 
    array (
      'required' => false,
      'name' => 'cost_currency',
      'vname' => 'LBL_COST_CURRENCY',
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
      'options' => 'cost_currency_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'project_cost_entirely_to' => 
    array (
      'required' => false,
      'name' => 'project_cost_entirely_to',
      'vname' => 'LBL_PROJECT_COST_ENTIRELY_TO',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'cost_for_sq_m_from' => 
    array (
      'required' => false,
      'name' => 'cost_for_sq_m_from',
      'vname' => 'LBL_COST_FOR_SQ_M_FROM',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'cost_for_sqm_to' => 
    array (
      'required' => false,
      'name' => 'cost_for_sqm_to',
      'vname' => 'LBL_COST_FOR_SQM_TO',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'cost_for_a_hundred_part_from' => 
    array (
      'required' => false,
      'name' => 'cost_for_a_hundred_part_from',
      'vname' => 'LBL_COST_FOR_A_HUNDRED_PART_FROM',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'cost_for_a_hundred_part_to' => 
    array (
      'required' => false,
      'name' => 'cost_for_a_hundred_part_to',
      'vname' => 'LBL_COST_FOR_A_HUNDRED_PART_TO',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'cost_of_rent_of_object_entirel' => 
    array (
      'required' => false,
      'name' => 'cost_of_rent_of_object_entirel',
      'vname' => 'LBL_COST_OF_RENT_OF_OBJECT_ENTIREL',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'rent_cost_for_sqm_a_year_from' => 
    array (
      'required' => false,
      'name' => 'rent_cost_for_sqm_a_year_from',
      'vname' => 'LBL_RENT_COST_FOR_SQM_A_YEAR_FROM',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'rent_cost_for_sqm_a_year_to' => 
    array (
      'required' => false,
      'name' => 'rent_cost_for_sqm_a_year_to',
      'vname' => 'LBL_RENT_COST_FOR_SQM_A_YEAR_TO',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'cost_of_rent_of_object_ent_to' => 
    array (
      'required' => false,
      'name' => 'cost_of_rent_of_object_ent_to',
      'vname' => 'LBL_COST_OF_RENT_OF_OBJECT_ENT_TO',
      'type' => 'currency',
      'massupdate' => 0,
      'comments' => '',
      'help' => '',
      'importable' => 'true',
      'duplicate_merge' => 'disabled',
      'duplicate_merge_dom_value' => '0',
      'audited' => 0,
      'reportable' => 0,
      'len' => 26,
    ),
    'd1_company_id_c' => 
    array (
      'required' => false,
      'name' => 'd1_company_id_c',
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
    'the_company' => 
    array (
      'required' => false,
      'source' => 'non-db',
      'name' => 'the_company',
      'vname' => 'LBL_THE_COMPANY',
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
      'id_name' => 'd1_company_id_c',
      'ext2' => 'd1_Company',
      'module' => 'd1_Company',
      'rname' => 'name',
      'quicksearch' => 'enabled',
      'studio' => 'visible',
    ),
  ),
  'relationships' => 
  array (
  ),
);
?>
