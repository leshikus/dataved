<?php
$module_name = 'd1_The_possible_transaction';
$listViewDefs [$module_name] = 
array (
  'NAME' => 
  array (
    'type' => 'name',
    'label' => 'LBL_NAME',
    'width' => '10%',
    'default' => true,
    'link' => true,
  ),
  'THE_CLIENT' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_CLIENT',
    'width' => '10%',
    'default' => true,
  ),
  'OFFERED_DATE_OF_CLOSING_OF_THE' => 
  array (
    'type' => 'date',
    'label' => 'LBL_OFFERED_DATE_OF_CLOSING_OF_THE',
    'width' => '10%',
    'default' => true,
  ),
  'THE_PROSPECTIVE_INCOME' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_THE_PROSPECTIVE_INCOME',
    'currency_format' => true,
    'width' => '10%',
    'default' => true,
  ),
  'PROBABILITY' => 
  array (
    'type' => 'float',
    'label' => 'LBL_PROBABILITY',
    'width' => '10%',
    'default' => true,
  ),
  'ESTIMATION' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_ESTIMATION',
    'width' => '10%',
  ),
  'DATE_ENTERED' => 
  array (
    'type' => 'datetime',
    'label' => 'LBL_DATE_ENTERED',
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
  'ASSUMPTIONS_ON_THE_AREA' => 
  array (
    'type' => 'int',
    'label' => 'LBL_ASSUMPTIONS_ON_THE_AREA',
    'width' => '10%',
    'default' => false,
  ),
  'THE_INCOME' => 
  array (
    'type' => 'radioenum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_THE_INCOME',
    'width' => '10%',
  ),
  'TRANSACTION_STAGE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TRANSACTION_STAGE',
    'width' => '10%',
  ),
  'ASSIGNED_USER_NAME' => 
  array (
    'width' => '9%',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'default' => false,
  ),
  'DESCRIPTION_2' => 
  array (
    'type' => 'text',
    'studio' => 'visible',
    'label' => 'LBL_DESCRIPTION_2',
    'width' => '10%',
    'default' => false,
  ),
  'CREATED_BY_NAME' => 
  array (
    'type' => 'relate',
    'link' => 'created_by_link',
    'label' => 'LBL_CREATED',
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
  'THE_ADDRESS_STATE' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_STATE',
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
  'THE_ADDRESS_COUNTRY' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS_COUNTRY',
    'width' => '10%',
    'default' => false,
  ),
  'PRIORITY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_PRIORITY',
    'width' => '10%',
  ),
  'INTEREST_SOURCE' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_INTEREST_SOURCE',
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
  'RENT_COST_FOR_SQM_YEAR_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_COST_FOR_SQM_YEAR_TO',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'RENT_COST_FOR_SQM_YEAR_FROM' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_RENT_COST_FOR_SQM_YEAR_FROM',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
  'COST_RENT_OF_OBJ_ENTIR_MONTH_T' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_RENT_OF_OBJ_ENTIR_MONTH_T',
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
  'COST_FOR_SQ_M_TO' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_COST_FOR_SQ_M_TO',
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
  'TOPONYMIC_AREA' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TOPONYMIC_AREA',
    'width' => '10%',
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
  'THE_AREA_OF_A_SITE_TO' => 
  array (
    'type' => 'int',
    'label' => 'LBL_THE_AREA_OF_A_SITE_TO',
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
  'TO_BE_IN' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TO_BE_IN',
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
  'HIGHWAY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_HIGHWAY',
    'width' => '10%',
  ),
  'DISTANCE_FROM_MKAD_TO' => 
  array (
    'type' => 'int',
    'label' => 'LBL_DISTANCE_FROM_MKAD_TO',
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
  'TERRITORIAL_ARRANGEMENT' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TERRITORIAL_ARRANGEMENT',
    'width' => '10%',
  ),
  'THE_OFFERED_SUM_OF_THE_COMMISS' => 
  array (
    'type' => 'float',
    'label' => 'LBL_THE_OFFERED_SUM_OF_THE_COMMISS',
    'width' => '10%',
    'default' => false,
  ),
  'OPERATION_TYPE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_OPERATION_TYPE',
    'width' => '10%',
  ),
  'THE_ADDRESS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ADDRESS',
    'width' => '10%',
    'default' => false,
  ),
  'SALE_STAGE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_SALE_STAGE',
    'width' => '10%',
  ),
  'OFFERED_SUM_OF_TRANSACTION' => 
  array (
    'type' => 'currency',
    'label' => 'LBL_OFFERED_SUM_OF_TRANSACTION',
    'currency_format' => true,
    'width' => '10%',
    'default' => false,
  ),
);
?>
