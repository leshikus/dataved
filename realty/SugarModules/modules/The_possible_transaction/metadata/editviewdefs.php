<?php
$module_name = 'd1_The_possible_transaction';
$viewdefs [$module_name] = 
array (
  'EditView' => 
  array (
    'templateMeta' => 
    array (
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
            'name' => 'the_client',
            'studio' => 'visible',
            'label' => 'LBL_THE_CLIENT',
          ),
          1 => 
          array (
            'name' => 'transaction_subject',
            'studio' => 'visible',
            'label' => 'LBL_TRANSACTION_SUBJECT',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'date_entered',
            'comment' => 'Date record created',
            'label' => 'LBL_DATE_ENTERED',
          ),
          1 => 
          array (
            'name' => 'offered_date_of_closing_of_the',
            'label' => 'LBL_OFFERED_DATE_OF_CLOSING_OF_THE',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'offered_sum_of_transaction',
            'label' => 'LBL_OFFERED_SUM_OF_TRANSACTION',
          ),
          1 => 
          array (
            'name' => 'the_offered_sum_of_the_commiss',
            'label' => 'LBL_THE_OFFERED_SUM_OF_THE_COMMISS',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'sale_stage',
            'studio' => 'visible',
            'label' => 'LBL_SALE_STAGE',
          ),
          1 => 
          array (
            'name' => 'operation_type',
            'studio' => 'visible',
            'label' => 'LBL_OPERATION_TYPE',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO_NAME',
          ),
        ),
      ),
      'lbl_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'the_address',
            'label' => 'LBL_THE_ADDRESS',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'territorial_arrangement',
            'studio' => 'visible',
            'label' => 'LBL_TERRITORIAL_ARRANGEMENT',
          ),
          1 => 
          array (
            'name' => 'district',
            'studio' => 'visible',
            'label' => 'LBL_DISTRICT',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'distance_from_mkad_from',
            'label' => 'LBL_DISTANCE_FROM_MKAD_FROM',
          ),
          1 => 
          array (
            'name' => 'distance_from_mkad_to',
            'label' => 'LBL_DISTANCE_FROM_MKAD_TO',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'highway',
            'studio' => 'visible',
            'label' => 'LBL_HIGHWAY',
          ),
          1 => 
          array (
            'name' => 'to_be_in',
            'studio' => 'visible',
            'label' => 'LBL_TO_BE_IN',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'the_area_from',
            'label' => 'LBL_THE_AREA_FROM',
          ),
          1 => 
          array (
            'name' => 'the_area_to',
            'label' => 'LBL_THE_AREA_TO',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'the_area_of_a_site_from',
            'label' => 'LBL_THE_AREA_OF_A_SITE_FROM',
          ),
          1 => 
          array (
            'name' => 'the_area_of_a_site_to',
            'label' => 'LBL_THE_AREA_OF_A_SITE_TO',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'toponymic_area',
            'studio' => 'visible',
            'label' => 'LBL_TOPONYMIC_AREA',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'assumptions_on_the_area',
            'label' => 'LBL_ASSUMPTIONS_ON_THE_AREA',
          ),
        ),
        8 => 
        array (
          0 => 
          array (
            'name' => 'furnish_condition',
            'studio' => 'visible',
            'label' => 'LBL_FURNISH_CONDITION',
          ),
        ),
      ),
      'lbl_panel2' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'currency_id',
            'studio' => 'visible',
            'label' => 'LBL_CURRENCY',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'project_cost_entirely_from',
            'label' => 'LBL_PROJECT_COST_ENTIRELY_FROM',
          ),
          1 => 
          array (
            'name' => 'project_cost_entirely_to',
            'label' => 'LBL_PROJECT_COST_ENTIRELY_TO',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'cost_for_sq_m_from',
            'label' => 'LBL_COST_FOR_SQ_M_FROM',
          ),
          1 => 
          array (
            'name' => 'cost_for_sq_m_to',
            'label' => 'LBL_COST_FOR_SQ_M_TO',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'cost_for_a_hundred_part_from',
            'label' => 'LBL_COST_FOR_A_HUNDRED_PART_FROM',
          ),
          1 => 
          array (
            'name' => 'cost_for_a_hundred_part_to',
            'label' => 'LBL_COST_FOR_A_HUNDRED_PART_TO',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'cost_of_rent_of_object_entirel',
            'label' => 'LBL_COST_OF_RENT_OF_OBJECT_ENTIREL',
          ),
          1 => 
          array (
            'name' => 'cost_rent_of_obj_entir_month_t',
            'label' => 'LBL_COST_RENT_OF_OBJ_ENTIR_MONTH_T',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'rent_cost_for_sqm_year_from',
            'label' => 'LBL_RENT_COST_FOR_SQM_YEAR_FROM',
          ),
          1 => 
          array (
            'name' => 'rent_cost_for_sqm_year_to',
            'label' => 'LBL_RENT_COST_FOR_SQM_YEAR_TO',
          ),
        ),
      ),
      'lbl_panel3' => 
      array (
        0 => 
        array (
          1 => 
          array (
            'name' => 'name',
            'label' => 'LBL_NAME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'condition_',
            'studio' => 'visible',
            'label' => 'LBL_CONDITION_',
          ),
          1 => 
          array (
            'name' => 'in_company',
            'studio' => 'visible',
            'label' => 'LBL_IN_COMPANY',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'interest_source',
            'studio' => 'visible',
            'label' => 'LBL_INTEREST_SOURCE',
          ),
          1 => 
          array (
            'name' => 'estimation',
            'studio' => 'visible',
            'label' => 'LBL_ESTIMATION',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'priority',
            'studio' => 'visible',
            'label' => 'LBL_PRIORITY',
          ),
          1 => 
          array (
            'name' => 'description_2',
            'studio' => 'visible',
            'label' => 'LBL_DESCRIPTION_2',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'transaction_stage',
            'studio' => 'visible',
            'label' => 'LBL_TRANSACTION_STAGE',
          ),
        ),
      ),
      'lbl_panel5' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'the_income',
            'studio' => 'visible',
            'label' => 'LBL_THE_INCOME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_prospective_income',
            'label' => 'LBL_THE_PROSPECTIVE_INCOME',
          ),
          1 => 
          array (
            'name' => 'probability',
            'label' => 'LBL_PROBABILITY',
          ),
        ),
      ),
    ),
  ),
);
?>
