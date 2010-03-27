<?php
$module_name = 'd1_Object_of_the_transaction';
$listViewDefs [$module_name] = 
array (
  'NAME' => 
  array (
    'width' => '32%',
    'label' => 'LBL_NAME',
    'default' => true,
    'link' => true,
  ),
  'THE_ADDRESS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS',
    'width' => '10%',
    'default' => true,
  ),
  'TRANSACTION_SUBJECT' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_TRANSACTION_SUBJECT',
    'width' => '10%',
  ),
  'FLOOR' => 
  array (
    'type' => 'int',
    'label' => 'LBL_FLOOR',
    'width' => '10%',
    'default' => true,
  ),
  'TOTAL_AREA_OF_A_PREMISE' => 
  array (
    'type' => 'int',
    'label' => 'LBL_TOTAL_AREA_OF_A_PREMISE',
    'width' => '10%',
    'default' => true,
  ),
  'COST_OF_SALE_OF_OBJ_ENTIRELY' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_OF_SALE_OF_OBJ_ENTIRELY',
    'currency_format' => true,
    'width' => '10%',
    'default' => true,
  ),
  'SALE_CURRENCY' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_SALE_CURRENCY ',
    'width' => '10%',
  ),
  'RENT_C_IN_MONTH_OF_OBJ_ENTIREL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_C_IN_MONTH_OF_OBJ_ENTIREL',
    'currency_format' => true,
    'width' => '10%',
    'default' => true,
  ),
  'RENT_C_IN_YEAR_OF_OBJ_ENTIRELY' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_C_IN_YEAR_OF_OBJ_ENTIRELY',
    'currency_format' => true,
    'width' => '10%',
    'default' => true,
  ),
  'RENT_CURRENCY' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_RENT_CURRENCY',
    'width' => '10%',
  ),
  'DATE_ENTERED' => 
  array (
    'type' => 'datetime',
    'label' => 'LBL_DATE_ENTERED',
    'width' => '10%',
    'default' => true,
  ),
  'ASSIGNED_USER_NAME' => 
  array (
    'width' => '9%',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'default' => false,
  ),
  'IS_IN' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_IS_IN',
    'width' => '10%',
  ),
  'OPERATION_TYPE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_OPERATION_TYPE',
    'width' => '10%',
  ),
  'THE_DESCRIPTION_OF_3RD_FLOOR' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_DESCRIPTION_OF_3RD_FLOOR',
    'width' => '10%',
    'default' => false,
  ),
  'PARKING' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_PARKING',
    'width' => '10%',
  ),
  'CAR_WASH' => 
  array (
    'type' => 'enum',
    'studio' => 'visible',
    'label' => 'LBL_CAR_WASH',
    'width' => '10%',
    'default' => false,
  ),
  'GARAGE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_GARAGE',
    'width' => '10%',
  ),
  'AREA_INFRASTRUCTURE' => 
  array (
    'type' => 'text',
    'studio' => 'visible',
    'label' => 'LBL_AREA_INFRASTRUCTURE',
    'width' => '10%',
    'default' => false,
  ),
  'PRESENCE_OF_AFFINITY_OF_WOOD' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_PRESENCE_OF_AFFINITY_OF_WOOD',
    'width' => '10%',
  ),
  'OBJECT_INFRASTRUCTURE' => 
  array (
    'type' => 'text',
    'studio' => 'visible',
    'label' => 'LBL_OBJECT_INFRASTRUCTURE',
    'width' => '10%',
    'default' => false,
  ),
  'KIND_FROM_WINDOWS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_KIND_FROM_WINDOWS',
    'width' => '10%',
    'default' => false,
  ),
  'CURRENCY_3' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_CURRENCY_3',
    'width' => '10%',
  ),
  'PARKING_COST_RBL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_PARKING_COST_RBL',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'DOCUMENTS_OF_THE_PHYSICAL_PERS' => 
  array (
    'type' => 'multienum',
    'studio' => 'visible',
    'label' => 'LBL_DOCUMENTS_OF_THE_PHYSICAL_PERS',
    'width' => '10%',
    'default' => false,
  ),
  'ID_OBJECT' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_ID_OBJECT',
    'width' => '10%',
    'default' => false,
  ),
  'VARIANT_2' => 
  array (
    'type' => 'multienum',
    'studio' => 'visible',
    'label' => 'LBL_VARIANT_2',
    'width' => '10%',
    'default' => false,
  ),
  'TELEPHONE_LINE' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_TELEPHONE_LINE',
    'width' => '10%',
    'default' => false,
  ),
  'ELECTROCONDUCTING_MATERIAL' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_ELECTROCONDUCTING_MATERIAL',
    'width' => '10%',
  ),
  'VARIANT_1' => 
  array (
    'type' => 'multienum',
    'studio' => 'visible',
    'label' => 'LBL_VARIANT_1',
    'width' => '10%',
    'default' => false,
  ),
  'CABLE_TELEVISION' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_CABLE_TELEVISION',
    'width' => '10%',
    'default' => false,
  ),
  'THE_INTERNET' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_THE_INTERNET',
    'width' => '10%',
    'default' => false,
  ),
  'ADDITIONAL_DATA' => 
  array (
    'type' => 'text',
    'studio' => 'visible',
    'label' => 'LBL_ADDITIONAL_DATA',
    'width' => '10%',
    'default' => false,
  ),
  'PRESENCE_OF_LIFTS' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PRESENCE_OF_LIFTS',
    'width' => '10%',
    'default' => false,
  ),
  'ANOTHER' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_ANOTHER',
    'width' => '10%',
    'default' => false,
  ),
  'WATER_FILTRATION' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_WATER_FILTRATION',
    'width' => '10%',
  ),
  'VENTILATION_AND_AIR_CONDITIONI' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_VENTILATION_AND_AIR_CONDITIONI',
    'width' => '10%',
  ),
  'GAS_SUPPLY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_GAS_SUPPLY',
    'width' => '10%',
  ),
  'HEATING' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_HEATING',
    'width' => '10%',
  ),
  'THE_WATER_DRAIN' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_THE_WATER_DRAIN',
    'width' => '10%',
  ),
  'WATER_SUPPLY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_WATER_SUPPLY',
    'width' => '10%',
  ),
  'ELECTRICAL_SUPPLY' => 
  array (
    'type' => 'float',
    'label' => 'LBL_ELECTRICAL_SUPPLY',
    'width' => '10%',
    'default' => false,
  ),
  'PROTECTION_ON_PERIMETRE' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PROTECTION_ON_PERIMETRE',
    'width' => '10%',
    'default' => false,
  ),
  'CHECK_POINT' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_CHECK_POINT',
    'width' => '10%',
    'default' => false,
  ),
  'VIDEO_OBSERVATION' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_VIDEO_OBSERVATION',
    'width' => '10%',
    'default' => false,
  ),
  'THE_MILITARISED' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_THE_MILITARISED',
    'width' => '10%',
    'default' => false,
  ),
  'PROTECTION_PRESENCE' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PROTECTION_PRESENCE',
    'width' => '10%',
    'default' => false,
  ),
  'THE_COMMENT_TO_A_PARKING' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_COMMENT_TO_A_PARKING',
    'width' => '10%',
    'default' => false,
  ),
  'PRESENCE_TERRITORIE' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PRESENCE_TERRITORIE',
    'width' => '10%',
    'default' => false,
  ),
  'PARKING_COST' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_PARKING_COST',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'QUANTITY_OF_PARKING_SPACES' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_PARKING_SPACES',
    'width' => '10%',
    'default' => false,
  ),
  'OPERATION_SERVICE' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_OPERATION_SERVICE',
    'width' => '10%',
    'default' => false,
  ),
  'THE_NOTE' => 
  array (
    'type' => 'text',
    'studio' => 'visible',
    'label' => 'LBL_THE_NOTE',
    'width' => '10%',
    'default' => false,
  ),
  'AFFINITY_TO_WATER' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_AFFINITY_TO_WATER',
    'width' => '10%',
  ),
  'LOADING_ON_ONE_SQ_M' => 
  array (
    'type' => 'float',
    'label' => 'LBL_LOADING_ON_ONE_SQ_M',
    'width' => '10%',
    'default' => false,
  ),
  'SITE_PROTECTION' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_SITE_PROTECTION',
    'width' => '10%',
  ),
  'THE_SITE_FORM' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_THE_SITE_FORM',
    'width' => '10%',
  ),
  'COMMENTS_3' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_COMMENTS_3',
    'width' => '10%',
    'default' => false,
  ),
  'STEP_OF_COLUMNS' => 
  array (
    'type' => 'float',
    'label' => 'LBL_STEP_OF_COLUMNS',
    'width' => '10%',
    'default' => false,
  ),
  'THE_AREA_OF_A_TERRACE' => 
  array (
    'type' => 'float',
    'label' => 'LBL_THE_AREA_OF_A_TERRACE',
    'width' => '10%',
    'default' => false,
  ),
  'QUANTITY_OF_ENTRANCE_GROUPS' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_ENTRANCE_GROUPS',
    'width' => '10%',
    'default' => false,
  ),
  'TERRACE_PRESENCE' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_TERRACE_PRESENCE',
    'width' => '10%',
    'default' => false,
  ),
  'PRESENCE_OF_THE_SEPARATE_LIFT' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PRESENCE_OF_THE_SEPARATE_LIFT',
    'width' => '10%',
    'default' => false,
  ),
  'PRESENCE_OF_BALCONIES' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PRESENCE_OF_BALCONIES',
    'width' => '10%',
    'default' => false,
  ),
  'HEIGHT_OF_CEILINGS' => 
  array (
    'type' => 'float',
    'label' => 'LBL_HEIGHT_OF_CEILINGS',
    'width' => '10%',
    'default' => false,
  ),
  'ROOF' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_ROOF',
    'width' => '10%',
  ),
  'WINDOWS' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_WINDOWS',
    'width' => '10%',
  ),
  'MATERIAL_OF_EXTERNAL_WALLS' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_MATERIAL_OF_EXTERNAL_WALLS',
    'width' => '10%',
  ),
  'THE_DESCRIPTION_OF_5TH_FLOOR' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_DESCRIPTION_OF_5TH_FLOOR',
    'width' => '10%',
    'default' => false,
  ),
  'THE_DESCRIPTION_OF_4TH_FLOOR' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_DESCRIPTION_OF_4TH_FLOOR',
    'width' => '10%',
    'default' => false,
  ),
  'THE_DESCRIPTION_OF_1ST_FLOOR' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_DESCRIPTION_OF_1ST_FLOOR',
    'width' => '10%',
    'default' => false,
  ),
  'THE_DESCRIPTION_OF_2ND_FLOOR' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_DESCRIPTION_OF_2ND_FLOOR',
    'width' => '10%',
    'default' => false,
  ),
  'BUILDING_DATE_STARTED' => 
  array (
    'type' => 'date',
    'label' => 'LBL_BUILDING_DATE_STARTED',
    'width' => '10%',
    'default' => false,
  ),
  'LAY_OUT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_LAY_OUT',
    'width' => '10%',
  ),
  'QUALITY_OF_FURNISH' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_QUALITY_OF_FURNISH',
    'width' => '10%',
  ),
  'FURNISH_CONDITION' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_FURNISH_CONDITION',
    'width' => '10%',
  ),
  'DATE_CLOSED_OF_BUILDING_YEAR_O' => 
  array (
    'type' => 'date',
    'label' => 'LBL_DATE_CLOSED_OF_BUILDING_YEAR_O',
    'width' => '10%',
    'default' => false,
  ),
  'QUANTITY_OF_APARTMENTS_ON_A_FL' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_APARTMENTS_ON_A_FL',
    'width' => '10%',
    'default' => false,
  ),
  'BUILDING_STAGE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_BUILDING_STAGE',
    'width' => '10%',
  ),
  'QUANTITY_OF_HOUSES_IN_SETTLEME' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_HOUSES_IN_SETTLEME',
    'width' => '10%',
    'default' => false,
  ),
  'FLOOR_BUILDINGS_QUANTITY_OF_LE' => 
  array (
    'type' => 'int',
    'label' => 'LBL_FLOOR_BUILDINGS_QUANTITY_OF_LE',
    'width' => '10%',
    'default' => false,
  ),
  'QUANTITY_OF_APARTMENTS_IN_THE_' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_APARTMENTS_IN_THE_',
    'width' => '10%',
    'default' => false,
  ),
  'QUANTITY_OF_BEDROOMS' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_BEDROOMS',
    'width' => '10%',
    'default' => false,
  ),
  'QUANTITY_OF_ROOMS' => 
  array (
    'type' => 'int',
    'label' => 'LBL_QUANTITY_OF_ROOMS',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ADDITIONAL_INFO_ON_AREA' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDITIONAL_INFO_ON_AREA',
    'width' => '10%',
    'default' => false,
  ),
  'THE_SITE_AREA_IN_HUNDRED_PARTS' => 
  array (
    'type' => 'float',
    'label' => 'LBL_THE_SITE_AREA_IN_HUNDRED_PARTS',
    'width' => '10%',
    'default' => false,
  ),
  'PAYMENT_OF_COMM_TO_INTERMEDIAR' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_PAYMENT_OF_COMM_TO_INTERMEDIAR',
    'width' => '10%',
    'default' => false,
  ),
  'THE_COMMENT' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_COMMENT',
    'width' => '10%',
    'default' => false,
  ),
  'OPERATIONAL_PAYMENTS' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_OPERATIONAL_PAYMENTS',
    'width' => '10%',
    'default' => false,
  ),
  'THE_EXCLUSIVE_RIGHT_ON_REALISA' => 
  array (
    'type' => 'bool',
    'label' => 'LBL_THE_EXCLUSIVE_RIGHT_ON_REALISA',
    'width' => '10%',
    'default' => false,
  ),
  'WORKING_COSTS' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_WORKING_COSTS',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'THE_VAT_2' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_THE_VAT_2',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_C_IN_YEAR_OF_OBJ_EN_RBL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_C_IN_YEAR_OF_OBJ_EN_RBL',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_C_IN_MONTH_OF_OBJ_EN_RBL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_C_IN_MONTH_OF_OBJ_EN_RBL',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_C_FOR_SQ_M_YEAR_RBL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_C_FOR_SQ_M_YEAR_RBL',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_C_FOR_SQ_M_MONTH_RBL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_C_FOR_SQ_M_MONTH_RBL',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_COST_FOR_SQ_M_A_YEAR' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_COST_FOR_SQ_M_A_YEAR',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_COST_FOR_SQ_M_A_MONTH' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_COST_FOR_SQ_M_A_MONTH',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'C_U_EQUALLY_2' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_C_U_EQUALLY_2',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'THE_VAT' => 
  array (
    'type' => 'float',
    'label' => 'LBL_THE_VAT',
    'width' => '10%',
    'default' => false,
  ),
  'COST_OF_SALE_OF_OBJ_ENTIRELY_I' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_OF_SALE_OF_OBJ_ENTIRELY_I',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'SALE_COST_FOR_A_HUNDRED_PART_I' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_SALE_COST_FOR_A_HUNDRED_PART_I',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'SALE_COST_FOR_SQ_M_IN_ROUBLES' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_SALE_COST_FOR_SQ_M_IN_ROUBLES',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'SALE_COST_FOR_A_HUNDRED_PART' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_SALE_COST_FOR_A_HUNDRED_PART',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'CONDITION_' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_CONDITION_',
    'width' => '10%',
  ),
  'SALE_COST_FOR_SQ_M' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_SALE_COST_FOR_SQ_M',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'C_U_EQUALLY' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_C_U_EQUALLY',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'CONTACT_LEGAL_PERSON' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_CONTACT_LEGAL_PERSON',
    'width' => '10%',
    'default' => false,
  ),
  'CONTACT_PHYSICAL_PERSON' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_CONTACT_PHYSICAL_PERSON',
    'width' => '10%',
    'default' => false,
  ),
  'OBJECT_FROM' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_OBJECT_FROM',
    'width' => '10%',
  ),
  'THE_ADDRESS_COUNTRY' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_COUNTRY',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ADDRESS_POSTALCODE' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_POSTALCODE',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ADDRESS_STATE' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_STATE',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ADDRESS_CITY' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_CITY',
    'width' => '10%',
    'default' => false,
  ),
  'DISTANCE_FROM_MKAD' => 
  array (
    'type' => 'int',
    'label' => 'LBL_DISTANCE_FROM_MKAD',
    'width' => '10%',
    'default' => false,
  ),
  'HIGHWAY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_HIGHWAY',
    'width' => '10%',
  ),
  'DISTANCE_TO_THE_UNDERGROUND' => 
  array (
    'type' => 'int',
    'label' => 'LBL_DISTANCE_TO_THE_UNDERGROUND',
    'width' => '10%',
    'default' => false,
  ),
  'TERRITORIAL_ARRANGEMENT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TERRITORIAL_ARRANGEMENT',
    'width' => '10%',
  ),
  'TOPONYMIC_AREA' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TOPONYMIC_AREA',
    'width' => '10%',
  ),
  'DISTRICT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_DISTRICT',
    'width' => '10%',
  ),
  'INTEREST' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_INTEREST',
    'width' => '10%',
    'default' => false,
  ),
  'CATEGORY_OF_OBJECTS_OF_THE_TRA' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_CATEGORY_OF_OBJECTS_OF_THE_TRA',
    'width' => '10%',
  ),
  'OFFICE_CLASS' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_OFFICE_CLASS',
    'width' => '10%',
  ),
);
?>
