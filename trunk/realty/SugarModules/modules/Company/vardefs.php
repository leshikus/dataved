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
    'condition_company' => 
    array (
      'required' => '1',
      'name' => 'condition_company',
      'vname' => 'LBL_CONDITION_COMPANY',
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
      'options' => 'condition_company_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'company_code' => 
    array (
      'required' => false,
      'name' => 'company_code',
      'vname' => 'LBL_COMPANY_CODE',
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
    'company_type' => 
    array (
      'required' => false,
      'name' => 'company_type',
      'vname' => 'LBL_COMPANY_TYPE',
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
      'options' => 'company_type_list',
      'studio' => 'visible',
      'dependency' => false,
    ),
    'the_expected_contract' => 
    array (
      'required' => false,
      'name' => 'the_expected_contract',
      'vname' => 'LBL_THE_EXPECTED_CONTRACT',
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
    'the_price_list' => 
    array (
      'required' => false,
      'name' => 'the_price_list',
      'vname' => 'LBL_THE_PRICE_LIST',
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
    'the_offer' => 
    array (
      'required' => false,
      'name' => 'the_offer',
      'vname' => 'LBL_THE_OFFER',
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
    'the_offered_date_of_the_beginn' => 
    array (
      'required' => false,
      'name' => 'the_offered_date_of_the_beginn',
      'vname' => 'LBL_THE_OFFERED_DATE_OF_THE_BEGINN',
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
    'actual_date_started' => 
    array (
      'required' => false,
      'name' => 'actual_date_started',
      'vname' => 'LBL_ACTUAL_DATE_STARTED',
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
    'the_offered_date_closed' => 
    array (
      'required' => false,
      'name' => 'the_offered_date_closed',
      'vname' => 'LBL_THE_OFFERED_DATE_CLOSED',
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
    'actual_date_closed' => 
    array (
      'required' => false,
      'name' => 'actual_date_closed',
      'vname' => 'LBL_ACTUAL_DATE_CLOSED',
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
    'total_cost_of_actions_of_the_c' => 
    array (
      'required' => false,
      'name' => 'total_cost_of_actions_of_the_c',
      'vname' => 'LBL_TOTAL_COST_OF_ACTIONS_OF_THE_C',
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
    'it_is_allocated_in_the_budget' => 
    array (
      'required' => false,
      'name' => 'it_is_allocated_in_the_budget',
      'vname' => 'LBL_IT_IS_ALLOCATED_IN_THE_BUDGET',
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
    'other_cost' => 
    array (
      'required' => false,
      'name' => 'other_cost',
      'vname' => 'LBL_OTHER_COST',
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
    'the_offered_income' => 
    array (
      'required' => false,
      'name' => 'the_offered_income',
      'vname' => 'LBL_THE_OFFERED_INCOME',
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
    'total_cost_of_the_company' => 
    array (
      'required' => false,
      'name' => 'total_cost_of_the_company',
      'vname' => 'LBL_TOTAL_COST_OF_THE_COMPANY',
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
  ),
  'relationships' => 
  array (
  ),
);
?>
