<?php
$module_name = 'd1_interest';
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
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'transaction_subject',
            'studio' => 'visible',
            'label' => 'LBL_TRANSACTION_SUBJECT',
          ),
          1 => 
          array (
            'name' => 'operation',
            'studio' => 'visible',
            'label' => 'LBL_OPERATION',
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
            'name' => 'phone_for_communication',
            'label' => 'LBL_PHONE_FOR_COMMUNICATION',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'email',
            'label' => 'LBL_EMAIL',
          ),
          1 => 
          array (
            'name' => 'the_company',
            'studio' => 'visible',
            'label' => 'LBL_THE_COMPANY',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'id_object',
            'label' => 'LBL_ID_OBJECT',
          ),
          1 => 
          array (
            'name' => 'choice_for_itself_the_client',
            'studio' => 'visible',
            'label' => 'LBL_CHOICE_FOR_ITSELF_THE_CLIENT',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'date_entered',
            'customCode' => '{$fields.date_entered.value} {$APP.LBL_BY} {$fields.created_by_name.value}',
            'label' => 'LBL_DATE_ENTERED',
          ),
          1 => 
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
            'name' => 'district',
            'studio' => 'visible',
            'label' => 'LBL_DISTRICT',
          ),
          1 => 
          array (
            'name' => 'toponymic_area',
            'studio' => 'visible',
            'label' => 'LBL_TOPONYMIC_AREA',
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
            'name' => 'distance_to_the_underground',
            'label' => 'LBL_DISTANCE_TO_THE_UNDERGROUND',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'highway',
            'studio' => 'visible',
            'label' => 'LBL_HIGHWAY',
          ),
          1 => 
          array (
            'name' => 'distance_from_mkad',
            'label' => 'LBL_DISTANCE_FROM_MKAD',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'the_address_of_offered_object',
            'label' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'description',
            'comment' => 'Full text of the note',
            'label' => 'LBL_DESCRIPTION',
          ),
        ),
      ),
      'lbl_panel2' => 
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
            'name' => 'de_territorial_arrangement',
            'studio' => 'visible',
            'label' => 'LBL_DE_TERRITORIAL_ARRANGEMENT',
          ),
          1 => 
          array (
            'name' => 'de_district',
            'studio' => 'visible',
            'label' => 'LBL_DE_DISTRICT',
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
            'name' => 'de_highway',
            'studio' => 'visible',
            'label' => 'LBL_DE_HIGHWAY',
          ),
          1 => 
          array (
            'name' => 'is_in',
            'studio' => 'visible',
            'label' => 'LBL_IS_IN',
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
            'name' => 'de_toponymic_area',
            'studio' => 'visible',
            'label' => 'LBL_DE_TOPONYMIC_AREA',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'assumption_on_the_area',
            'label' => 'LBL_ASSUMPTION_ON_THE_AREA',
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
      'lbl_panel3' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'cost_currency',
            'studio' => 'visible',
            'label' => 'LBL_COST_CURRENCY',
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
            'name' => 'cost_for_sqm_to',
            'label' => 'LBL_COST_FOR_SQM_TO',
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
            'name' => 'cost_of_rent_of_object_ent_to',
            'label' => 'LBL_COST_OF_RENT_OF_OBJECT_ENT_TO',
          ),
          1 => 
          array (
            'name' => 'cost_of_rent_of_object_entirel',
            'label' => 'LBL_COST_OF_RENT_OF_OBJECT_ENTIREL',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'rent_cost_for_sqm_a_year_from',
            'label' => 'LBL_RENT_COST_FOR_SQM_A_YEAR_FROM',
          ),
          1 => 
          array (
            'name' => 'rent_cost_for_sqm_a_year_to',
            'label' => 'LBL_RENT_COST_FOR_SQM_A_YEAR_TO',
          ),
        ),
      ),
    ),
  ),
);
?>
