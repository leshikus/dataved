<?php
$module_name = 'd1_Object_of_the_transaction';
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
            'name' => 'id_object',
            'label' => 'LBL_ID_OBJECT',
          ),
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
            'name' => 'transaction_subject',
            'studio' => 'visible',
            'label' => 'LBL_TRANSACTION_SUBJECT',
          ),
          1 => 
          array (
            'name' => 'operation_type',
            'studio' => 'visible',
            'label' => 'LBL_OPERATION_TYPE',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'is_in',
            'studio' => 'visible',
            'label' => 'LBL_IS_IN',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'office_class',
            'studio' => 'visible',
            'label' => 'LBL_OFFICE_CLASS',
          ),
          1 => 
          array (
            'name' => 'category_of_objects_of_the_tra',
            'studio' => 'visible',
            'label' => 'LBL_CATEGORY_OF_OBJECTS_OF_THE_TRA',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'interest',
            'studio' => 'visible',
            'label' => 'LBL_INTEREST',
          ),
          1 => 
          array (
            'name' => 'condition_',
            'studio' => 'visible',
            'label' => 'LBL_CONDITION_',
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
            'name' => 'the_address',
            'label' => 'LBL_THE_ADDRESS',
          ),
        ),
      ),
      'lbl_panel2' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'object_from',
            'studio' => 'visible',
            'label' => 'LBL_OBJECT_FROM',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'contact_physical_person',
            'studio' => 'visible',
            'label' => 'LBL_CONTACT_PHYSICAL_PERSON',
          ),
          1 => 
          array (
            'name' => 'contact_legal_person',
            'studio' => 'visible',
            'label' => 'LBL_CONTACT_LEGAL_PERSON',
          ),
        ),
        2 => 
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
      ),
      'lbl_panel3' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'sale_currency',
            'studio' => 'visible',
            'label' => 'LBL_SALE_CURRENCY ',
          ),
          1 => 
          array (
            'name' => 'c_u_equally',
            'label' => 'LBL_C_U_EQUALLY',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'sale_cost_for_sq_m',
            'label' => 'LBL_SALE_COST_FOR_SQ_M',
          ),
          1 => 
          array (
            'name' => 'sale_cost_for_sq_m_in_roubles',
            'label' => 'LBL_SALE_COST_FOR_SQ_M_IN_ROUBLES',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'sale_cost_for_a_hundred_part',
            'label' => 'LBL_SALE_COST_FOR_A_HUNDRED_PART',
          ),
          1 => 
          array (
            'name' => 'sale_cost_for_a_hundred_part_i',
            'label' => 'LBL_SALE_COST_FOR_A_HUNDRED_PART_I',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'cost_of_sale_of_obj_entirely',
            'label' => 'LBL_COST_OF_SALE_OF_OBJ_ENTIRELY',
          ),
          1 => 
          array (
            'name' => 'cost_of_sale_of_obj_entirely_i',
            'label' => 'LBL_COST_OF_SALE_OF_OBJ_ENTIRELY_I',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'the_vat',
            'label' => 'LBL_THE_VAT',
          ),
        ),
      ),
      'lbl_panel4' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'rent_currency',
            'studio' => 'visible',
            'label' => 'LBL_RENT_CURRENCY',
          ),
          1 => 
          array (
            'name' => 'c_u_equally_2',
            'label' => 'LBL_C_U_EQUALLY_2',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'rent_cost_for_sq_m_a_month',
            'label' => 'LBL_RENT_COST_FOR_SQ_M_A_MONTH',
          ),
          1 => 
          array (
            'name' => 'rent_cost_for_sq_m_a_year',
            'label' => 'LBL_RENT_COST_FOR_SQ_M_A_YEAR',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'rent_c_in_month_of_obj_entirel',
            'label' => 'LBL_RENT_C_IN_MONTH_OF_OBJ_ENTIREL',
          ),
          1 => 
          array (
            'name' => 'rent_c_in_year_of_obj_entirely',
            'label' => 'LBL_RENT_C_IN_YEAR_OF_OBJ_ENTIRELY',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'rent_c_for_sq_m_month_rbl',
            'label' => 'LBL_RENT_C_FOR_SQ_M_MONTH_RBL',
          ),
          1 => 
          array (
            'name' => 'rent_c_for_sq_m_year_rbl',
            'label' => 'LBL_RENT_C_FOR_SQ_M_YEAR_RBL',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'rent_c_in_month_of_obj_en_rbl',
            'label' => 'LBL_RENT_C_IN_MONTH_OF_OBJ_EN_RBL',
          ),
          1 => 
          array (
            'name' => 'rent_c_in_year_of_obj_en_rbl',
            'label' => 'LBL_RENT_C_IN_YEAR_OF_OBJ_EN_RBL',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'the_vat_2',
            'label' => 'LBL_THE_VAT_2',
          ),
        ),
      ),
      'lbl_panel5' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'operational_payments',
            'label' => 'LBL_OPERATIONAL_PAYMENTS',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'working_costs',
            'label' => 'LBL_WORKING_COSTS',
          ),
        ),
      ),
      'lbl_panel6' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'payment_of_comm_to_intermediar',
            'label' => 'LBL_PAYMENT_OF_COMM_TO_INTERMEDIAR',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_exclusive_right_on_realisa',
            'label' => 'LBL_THE_EXCLUSIVE_RIGHT_ON_REALISA',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'the_comment',
            'label' => 'LBL_THE_COMMENT',
          ),
        ),
      ),
      'lbl_panel7' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'total_area_of_a_premise',
            'label' => 'LBL_TOTAL_AREA_OF_A_PREMISE',
          ),
          1 => 
          array (
            'name' => 'the_site_area_in_hundred_parts',
            'label' => 'LBL_THE_SITE_AREA_IN_HUNDRED_PARTS',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_additional_info_on_area',
            'label' => 'LBL_THE_ADDITIONAL_INFO_ON_AREA',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'quantity_of_rooms',
            'label' => 'LBL_QUANTITY_OF_ROOMS',
          ),
          1 => 
          array (
            'name' => 'quantity_of_bedrooms',
            'label' => 'LBL_QUANTITY_OF_BEDROOMS',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'floor',
            'label' => 'LBL_FLOOR',
          ),
          1 => 
          array (
            'name' => 'floor_buildings_quantity_of_le',
            'label' => 'LBL_FLOOR_BUILDINGS_QUANTITY_OF_LE',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'kind_from_windows',
            'label' => 'LBL_KIND_FROM_WINDOWS',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'quantity_of_apartments_in_the_',
            'label' => 'LBL_QUANTITY_OF_APARTMENTS_IN_THE_',
          ),
          1 => 
          array (
            'name' => 'quantity_of_apartments_on_a_fl',
            'label' => 'LBL_QUANTITY_OF_APARTMENTS_ON_A_FL',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'quantity_of_houses_in_settleme',
            'label' => 'LBL_QUANTITY_OF_HOUSES_IN_SETTLEME',
          ),
        ),
      ),
      'lbl_panel8' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'building_stage',
            'studio' => 'visible',
            'label' => 'LBL_BUILDING_STAGE',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'building_date_started',
            'label' => 'LBL_BUILDING_DATE_STARTED',
          ),
          1 => 
          array (
            'name' => 'date_closed_of_building_year_o',
            'label' => 'LBL_DATE_CLOSED_OF_BUILDING_YEAR_O',
          ),
        ),
      ),
      'lbl_panel9' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'furnish_condition',
            'studio' => 'visible',
            'label' => 'LBL_FURNISH_CONDITION',
          ),
          1 => 
          array (
            'name' => 'quality_of_furnish',
            'studio' => 'visible',
            'label' => 'LBL_QUALITY_OF_FURNISH',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'lay_out',
            'studio' => 'visible',
            'label' => 'LBL_LAY_OUT',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'the_description_of_1st_floor',
            'label' => 'LBL_THE_DESCRIPTION_OF_1ST_FLOOR',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'the_description_of_2nd_floor',
            'label' => 'LBL_THE_DESCRIPTION_OF_2ND_FLOOR',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'the_description_of_3rd_floor',
            'label' => 'LBL_THE_DESCRIPTION_OF_3RD_FLOOR',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'the_description_of_4th_floor',
            'label' => 'LBL_THE_DESCRIPTION_OF_4TH_FLOOR',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'the_description_of_5th_floor',
            'label' => 'LBL_THE_DESCRIPTION_OF_5TH_FLOOR',
          ),
        ),
      ),
      'lbl_panel10' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'material_of_external_walls',
            'studio' => 'visible',
            'label' => 'LBL_MATERIAL_OF_EXTERNAL_WALLS',
          ),
          1 => 
          array (
            'name' => 'windows',
            'studio' => 'visible',
            'label' => 'LBL_WINDOWS',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'roof',
            'studio' => 'visible',
            'label' => 'LBL_ROOF',
          ),
          1 => 
          array (
            'name' => 'height_of_ceilings',
            'label' => 'LBL_HEIGHT_OF_CEILINGS',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'presence_of_balconies',
            'label' => 'LBL_PRESENCE_OF_BALCONIES',
          ),
          1 => 
          array (
            'name' => 'quantity_of_entrance_groups',
            'label' => 'LBL_QUANTITY_OF_ENTRANCE_GROUPS',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'terrace_presence',
            'label' => 'LBL_TERRACE_PRESENCE',
          ),
          1 => 
          array (
            'name' => 'the_area_of_a_terrace',
            'label' => 'LBL_THE_AREA_OF_A_TERRACE',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'presence_of_the_separate_lift',
            'label' => 'LBL_PRESENCE_OF_THE_SEPARATE_LIFT',
          ),
          1 => 
          array (
            'name' => 'step_of_columns',
            'label' => 'LBL_STEP_OF_COLUMNS',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'loading_on_one_sq_m',
            'label' => 'LBL_LOADING_ON_ONE_SQ_M',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'comments_3',
            'label' => 'LBL_COMMENTS_3',
          ),
        ),
      ),
      'lbl_panel11' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'the_site_form',
            'studio' => 'visible',
            'label' => 'LBL_THE_SITE_FORM',
          ),
          1 => 
          array (
            'name' => 'site_protection',
            'studio' => 'visible',
            'label' => 'LBL_SITE_PROTECTION',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'affinity_to_water',
            'studio' => 'visible',
            'label' => 'LBL_AFFINITY_TO_WATER',
          ),
          1 => 
          array (
            'name' => 'presence_of_affinity_of_wood',
            'studio' => 'visible',
            'label' => 'LBL_PRESENCE_OF_AFFINITY_OF_WOOD',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'the_note',
            'studio' => 'visible',
            'label' => 'LBL_THE_NOTE',
          ),
        ),
      ),
      'lbl_panel12' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'operation_service',
            'label' => 'LBL_OPERATION_SERVICE',
          ),
          1 => 
          array (
            'name' => 'presence_territorie',
            'label' => 'LBL_PRESENCE_TERRITORIE',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'object_infrastructure',
            'studio' => 'visible',
            'label' => 'LBL_OBJECT_INFRASTRUCTURE',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'area_infrastructure',
            'studio' => 'visible',
            'label' => 'LBL_AREA_INFRASTRUCTURE',
          ),
        ),
      ),
      'lbl_panel13' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'garage',
            'studio' => 'visible',
            'label' => 'LBL_GARAGE',
          ),
          1 => 
          array (
            'name' => 'car_wash',
            'studio' => 'visible',
            'label' => 'LBL_CAR_WASH',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'parking',
            'studio' => 'visible',
            'label' => 'LBL_PARKING',
          ),
          1 => 
          array (
            'name' => 'quantity_of_parking_spaces',
            'label' => 'LBL_QUANTITY_OF_PARKING_SPACES',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'parking_cost',
            'label' => 'LBL_PARKING_COST',
          ),
          1 => 
          array (
            'name' => 'currency_3',
            'studio' => 'visible',
            'label' => 'LBL_CURRENCY_3',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'parking_cost_rbl',
            'label' => 'LBL_PARKING_COST_RBL',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'the_comment_to_a_parking',
            'label' => 'LBL_THE_COMMENT_TO_A_PARKING',
          ),
        ),
      ),
      'lbl_panel14' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'protection_presence',
            'label' => 'LBL_PROTECTION_PRESENCE',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'check_point',
            'label' => 'LBL_CHECK_POINT',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'the_militarised',
            'label' => 'LBL_THE_MILITARISED',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'protection_on_perimetre',
            'label' => 'LBL_PROTECTION_ON_PERIMETRE',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'video_observation',
            'label' => 'LBL_VIDEO_OBSERVATION',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'another',
            'label' => 'LBL_ANOTHER',
          ),
        ),
      ),
      'lbl_panel16' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'electrical_supply',
            'label' => 'LBL_ELECTRICAL_SUPPLY',
          ),
          1 => 
          array (
            'name' => 'water_supply',
            'studio' => 'visible',
            'label' => 'LBL_WATER_SUPPLY',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_water_drain',
            'studio' => 'visible',
            'label' => 'LBL_THE_WATER_DRAIN',
          ),
          1 => 
          array (
            'name' => 'heating',
            'studio' => 'visible',
            'label' => 'LBL_HEATING',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'gas_supply',
            'studio' => 'visible',
            'label' => 'LBL_GAS_SUPPLY',
          ),
        ),
      ),
      'lbl_panel17' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'water_filtration',
            'studio' => 'visible',
            'label' => 'LBL_WATER_FILTRATION',
          ),
          1 => 
          array (
            'name' => 'ventilation_and_air_conditioni',
            'studio' => 'visible',
            'label' => 'LBL_VENTILATION_AND_AIR_CONDITIONI',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'presence_of_lifts',
            'label' => 'LBL_PRESENCE_OF_LIFTS',
          ),
          1 => 
          array (
            'name' => 'electroconducting_material',
            'studio' => 'visible',
            'label' => 'LBL_ELECTROCONDUCTING_MATERIAL',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'additional_data',
            'studio' => 'visible',
            'label' => 'LBL_ADDITIONAL_DATA',
          ),
        ),
      ),
      'lbl_panel18' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'telephone_line',
            'label' => 'LBL_TELEPHONE_LINE',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_internet',
            'label' => 'LBL_THE_INTERNET',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'cable_television',
            'label' => 'LBL_CABLE_TELEVISION',
          ),
        ),
      ),
      'lbl_panel19' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'variant_1',
            'studio' => 'visible',
            'label' => 'LBL_VARIANT_1',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'variant_2',
            'studio' => 'visible',
            'label' => 'LBL_VARIANT_2',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'documents_of_the_physical_pers',
            'studio' => 'visible',
            'label' => 'LBL_DOCUMENTS_OF_THE_PHYSICAL_PERS',
          ),
        ),
      ),
    ),
  ),
);
?>
