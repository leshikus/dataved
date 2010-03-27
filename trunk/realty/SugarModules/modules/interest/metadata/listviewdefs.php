<?php
$module_name = 'd1_interest';
$listViewDefs [$module_name] = 
array (
  'NAME' => 
  array (
    'width' => '10%',
    'label' => 'LBL_NAME',
    'link' => true,
    'default' => true,
  ),
  'DESCRIPTION' => 
  array (
    'type' => 'text',
    'label' => 'LBL_DESCRIPTION',
    'width' => '10%',
    'default' => true,
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
    'link' => 'assigned_user_link',
    'type' => 'relate',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'width' => '10%',
    'default' => false,
  ),
  'TRANSACTION_SUBJECT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TRANSACTION_SUBJECT',
    'width' => '10%',
  ),
  'IS_IN' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_IS_IN',
    'width' => '10%',
  ),
  'THE_ADDRESS_COUNTRY' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_COUNTRY',
    'width' => '10%',
    'default' => false,
  ),
  'COST_OF_RENT_OF_OBJECT_ENT_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_OF_RENT_OF_OBJECT_ENT_TO',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_COST_FOR_SQM_A_YEAR_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_COST_FOR_SQM_A_YEAR_TO',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_COST_FOR_SQM_A_YEAR_FROM' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_COST_FOR_SQM_A_YEAR_FROM',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'COST_OF_RENT_OF_OBJECT_ENTIREL' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_OF_RENT_OF_OBJECT_ENTIREL',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'COST_FOR_A_HUNDRED_PART_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_FOR_A_HUNDRED_PART_TO',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'COST_FOR_A_HUNDRED_PART_FROM' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_FOR_A_HUNDRED_PART_FROM',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'COST_FOR_SQM_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_FOR_SQM_TO',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'COST_FOR_SQ_M_FROM' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_FOR_SQ_M_FROM',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'PROJECT_COST_ENTIRELY_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_PROJECT_COST_ENTIRELY_TO',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'THE_COMPANY' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_COMPANY',
    'width' => '10%',
    'default' => false,
  ),
  'COST_CURRENCY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_COST_CURRENCY',
    'width' => '10%',
  ),
  'PROJECT_COST_ENTIRELY_FROM' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_PROJECT_COST_ENTIRELY_FROM',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'FURNISH_CONDITION' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_FURNISH_CONDITION',
    'width' => '10%',
  ),
  'ASSUMPTION_ON_THE_AREA' => 
  array (
    'type' => 'int',
    'label' => 'LBL_ASSUMPTION_ON_THE_AREA',
    'width' => '10%',
    'default' => false,
  ),
  'DE_TOPONYMIC_AREA' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_DE_TOPONYMIC_AREA',
    'width' => '10%',
  ),
  'THE_AREA_OF_A_SITE_TO' => 
  array (
    'type' => 'int',
    'label' => 'LBL_THE_AREA_OF_A_SITE_TO',
    'width' => '10%',
    'default' => false,
  ),
  'THE_AREA_OF_A_SITE_FROM' => 
  array (
    'type' => 'int',
    'label' => 'LBL_THE_AREA_OF_A_SITE_FROM',
    'width' => '10%',
    'default' => false,
  ),
  'THE_AREA_TO' => 
  array (
    'type' => 'int',
    'label' => 'LBL_THE_AREA_TO',
    'width' => '10%',
    'default' => false,
  ),
  'THE_AREA_FROM' => 
  array (
    'type' => 'int',
    'label' => 'LBL_THE_AREA_FROM',
    'width' => '10%',
    'default' => false,
  ),
  'DISTANCE_FROM_MKAD_TO' => 
  array (
    'type' => 'int',
    'label' => 'LBL_DISTANCE_FROM_MKAD_TO',
    'width' => '10%',
    'default' => false,
  ),
  'DISTANCE_TO_THE_UNDERGROUND' => 
  array (
    'type' => 'int',
    'label' => 'LBL_DISTANCE_TO_THE_UNDERGROUND',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ADDRESS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS',
    'width' => '10%',
    'default' => false,
  ),
  'DISTANCE_FROM_MKAD_FROM' => 
  array (
    'type' => 'int',
    'label' => 'LBL_DISTANCE_FROM_MKAD_FROM',
    'width' => '10%',
    'default' => false,
  ),
  'DE_DISTRICT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_DE_DISTRICT',
    'width' => '10%',
  ),
  'DE_HIGHWAY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_DE_HIGHWAY',
    'width' => '10%',
  ),
  'DE_TERRITORIAL_ARRANGEMENT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_DE_TERRITORIAL_ARRANGEMENT',
    'width' => '10%',
  ),
  'THE_ADDRESS_OF_OFFERED_OBJECT' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ADDRESS_OF_OFFERED_OBJECT_CITY' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_OF_OFFERED_OBJECT_CITY',
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
  'TERRITORIAL_ARRANGEMENT' => 
  array (
    'type' => 'enum',
    'studio' => 'visible',
    'label' => 'LBL_TERRITORIAL_ARRANGEMENT',
    'width' => '10%',
    'default' => false,
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
  'CHOICE_FOR_ITSELF_THE_CLIENT' => 
  array (
    'type' => 'radioenum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_CHOICE_FOR_ITSELF_THE_CLIENT',
    'width' => '10%',
  ),
  'ID_OBJECT' => 
  array (
    'type' => 'int',
    'label' => 'LBL_ID_OBJECT',
    'width' => '10%',
    'default' => false,
  ),
  'EMAIL' => 
  array (
    'type' => 'url',
    'label' => 'LBL_EMAIL',
    'width' => '10%',
    'default' => false,
  ),
  'PHONE_FOR_COMMUNICATION' => 
  array (
    'type' => 'phone',
    'label' => 'LBL_PHONE_FOR_COMMUNICATION',
    'width' => '10%',
    'default' => false,
  ),
  'INTEREST_SOURCE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_INTEREST_SOURCE',
    'width' => '10%',
  ),
  'OPERATION' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_OPERATION',
    'width' => '10%',
  ),
  'DATE_MODIFIED' => 
  array (
    'type' => 'datetime',
    'label' => 'LBL_DATE_MODIFIED',
    'width' => '10%',
    'default' => false,
  ),
);
?>
