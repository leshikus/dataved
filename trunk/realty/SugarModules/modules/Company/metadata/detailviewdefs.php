<?php
$module_name = 'd1_Company';
$viewdefs [$module_name] = 
array (
  'DetailView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'buttons' => 
        array (
          0 => 'EDIT',
          1 => 'DUPLICATE',
          2 => 'DELETE',
        ),
      ),
      'maxColumns' => '2',
      'widths' => 
      array (
        0 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
        1 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
      ),
    ),
    'panels' => 
    array (
      'default' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'name',
            'label' => 'LBL_NAME',
          ),
          1 => 
          array (
            'name' => 'condition_company',
            'studio' => 'visible',
            'label' => 'LBL_CONDITION_COMPANY',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'company_code',
            'label' => 'LBL_COMPANY_CODE',
          ),
          1 => 
          array (
            'name' => 'company_type',
            'studio' => 'visible',
            'label' => 'LBL_COMPANY_TYPE',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'the_expected_contract',
            'label' => 'LBL_THE_EXPECTED_CONTRACT',
          ),
          1 => 
          array (
            'name' => 'the_price_list',
            'label' => 'LBL_THE_PRICE_LIST',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'the_offer',
            'studio' => 'visible',
            'label' => 'LBL_THE_OFFER',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'currency_id',
            'studio' => 'visible',
            'label' => 'LBL_CURRENCY',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'description',
            'comment' => 'Full text of the note',
            'label' => 'LBL_DESCRIPTION',
          ),
        ),
      ),
      'lbl_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'the_offered_date_of_the_beginn',
            'label' => 'LBL_THE_OFFERED_DATE_OF_THE_BEGINN',
          ),
          1 => 
          array (
            'name' => 'actual_date_started',
            'label' => 'LBL_ACTUAL_DATE_STARTED',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_offered_date_closed',
            'label' => 'LBL_THE_OFFERED_DATE_CLOSED',
          ),
          1 => 
          array (
            'name' => 'actual_date_closed',
            'label' => 'LBL_ACTUAL_DATE_CLOSED',
          ),
        ),
      ),
      'lbl_panel2' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'total_cost_of_actions_of_the_c',
            'label' => 'LBL_TOTAL_COST_OF_ACTIONS_OF_THE_C',
          ),
          1 => 
          array (
            'name' => 'it_is_allocated_in_the_budget',
            'label' => 'LBL_IT_IS_ALLOCATED_IN_THE_BUDGET',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'other_cost',
            'label' => 'LBL_OTHER_COST',
          ),
          1 => 
          array (
            'name' => 'the_offered_income',
            'label' => 'LBL_THE_OFFERED_INCOME',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'total_cost_of_the_company',
            'label' => 'LBL_TOTAL_COST_OF_THE_COMPANY',
          ),
        ),
      ),
      'lbl_panel3' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO_NAME',
          ),
          1 => 
          array (
            'name' => 'date_entered',
            'comment' => 'Date record created',
            'label' => 'LBL_DATE_ENTERED',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'modified_by_name',
            'label' => 'LBL_MODIFIED_NAME',
          ),
          1 => 
          array (
            'name' => 'date_modified',
            'comment' => 'Date record last modified',
            'label' => 'LBL_DATE_MODIFIED',
          ),
        ),
      ),
    ),
  ),
);
?>
