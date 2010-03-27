<?php
$module_name = 'd1_offer';
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
  'THE_TRANSACTION_IS_POSSIBLE' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_TRANSACTION_IS_POSSIBLE',
    'width' => '10%',
    'default' => true,
  ),
  'OBJECT_OF_THE_TRANSACTION' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_OBJECT_OF_THE_TRANSACTION',
    'width' => '10%',
    'default' => true,
  ),
  'OFFER_TYPE' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_OFFER_TYPE',
    'width' => '10%',
  ),
  'RESULT' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_RESULT',
    'width' => '10%',
  ),
  'DATE_ENTERED' => 
  array (
    'type' => 'datetime',
    'label' => 'LBL_DATE_ENTERED',
    'width' => '10%',
    'default' => true,
  ),
  'DESCRIPTION' => 
  array (
    'type' => 'text',
    'label' => 'LBL_DESCRIPTION',
    'width' => '10%',
    'default' => false,
  ),
  'CONDITION_OFFER' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_CONDITION_OFFER',
    'width' => '10%',
  ),
  'THE_STATUS' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_THE_STATUS',
    'width' => '10%',
  ),
  'DISPLAY_DATE' => 
  array (
    'type' => 'date',
    'label' => 'LBL_DISPLAY_DATE',
    'width' => '10%',
    'default' => false,
  ),
  'ASSIGNED_USER_NAME' => 
  array (
    'width' => '9%',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'default' => false,
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
