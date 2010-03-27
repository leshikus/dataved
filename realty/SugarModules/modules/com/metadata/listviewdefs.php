<?php
$module_name = 'd1_com';
$OBJECT_NAME = 'D1_COM';
$listViewDefs [$module_name] = 
array (
  'NAME' => 
  array (
    'width' => '40%',
    'label' => 'LBL_ACCOUNT_NAME',
    'link' => true,
    'default' => true,
  ),
  'MAIN_PHONE' => 
  array (
    'type' => 'phone',
    'label' => 'LBL_MAIN_PHONE',
    'width' => '10%',
    'default' => true,
  ),
  'THE_BASIC_CONTACT' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_BASIC_CONTACT',
    'width' => '10%',
    'default' => true,
  ),
  'EMAIL' => 
  array (
    'type' => 'url',
    'default' => true,
    'label' => 'LBL_EMAIL',
    'width' => '10%',
  ),
  'D1_COM_TYPE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_TYPE',
    'default' => false,
  ),
  'INDUSTRY' => 
  array (
    'width' => '10%',
    'label' => 'LBL_INDUSTRY',
    'default' => false,
  ),
  'ANNUAL_REVENUE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_ANNUAL_REVENUE',
    'default' => false,
  ),
  'WEB_SITE' => 
  array (
    'type' => 'url',
    'label' => 'LBL_WEB_SITE',
    'width' => '10%',
    'default' => false,
  ),
  'DIRECTING_AGENCY' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_DIRECTING_AGENCY',
    'width' => '10%',
    'default' => false,
  ),
  'D1_INTEREST_D1_COM_NAME' => 
  array (
    'type' => 'relate',
    'link' => 'd1_interest_d1_com',
    'label' => 'LBL_D1_INTEREST_D1_COM_FROM_D1_INTEREST_TITLE',
    'width' => '10%',
    'default' => false,
  ),
  'D1_COM_D1_COM_NAME' => 
  array (
    'type' => 'relate',
    'link' => 'd1_com_d1_com',
    'label' => 'LBL_D1_COM_D1_COM_FROM_D1_COM_L_TITLE',
    'width' => '10%',
    'default' => false,
  ),
  'THE_ACTUAL_ADDRESS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_ACTUAL_ADDRESS',
    'width' => '10%',
    'default' => false,
  ),
  'THE_LEGAL_ADDRESS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_LEGAL_ADDRESS ',
    'width' => '10%',
    'default' => false,
  ),
  'THE_HEAD_NAMES' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_HEAD_NAMES',
    'width' => '10%',
    'default' => false,
  ),
  'THE_GENERAL_DIRECTOR' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_GENERAL_DIRECTOR',
    'width' => '10%',
    'default' => false,
  ),
  'THE_CHIEF_ACCOUNTANT' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_CHIEF_ACCOUNTANT',
    'width' => '10%',
    'default' => false,
  ),
  'BIC' => 
  array (
    'type' => 'int',
    'label' => 'LBL_BIC',
    'width' => '10%',
    'default' => false,
  ),
  'KC' => 
  array (
    'type' => 'int',
    'label' => 'LBL_KC',
    'width' => '10%',
    'default' => false,
  ),
  'OGRN' => 
  array (
    'type' => 'int',
    'label' => 'LBL_OGRN',
    'width' => '10%',
    'default' => false,
  ),
  'P_C' => 
  array (
    'type' => 'int',
    'label' => 'LBL_P_C',
    'width' => '10%',
    'default' => false,
  ),
  'KPP' => 
  array (
    'type' => 'int',
    'label' => 'LBL_KPP',
    'width' => '10%',
    'default' => false,
  ),
  'CODE_OKPO' => 
  array (
    'type' => 'int',
    'label' => 'LBL_CODE_OKPO',
    'width' => '10%',
    'default' => false,
  ),
  'INN' => 
  array (
    'type' => 'int',
    'label' => 'LBL_INN',
    'width' => '10%',
    'default' => false,
  ),
  'THE_SHORT_NAME' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_THE_SHORT_NAME',
    'width' => '10%',
    'default' => false,
  ),
  'FULL_NAME' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_FULL_NAME',
    'width' => '10%',
    'default' => false,
  ),
  'THE_HEAD_POST' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_THE_HEAD_POST',
    'width' => '10%',
  ),
  'NUMBER_OF_EMPLOYEES' => 
  array (
    'type' => 'int',
    'label' => 'LBL_NUMBER_OF_EMPLOYEES',
    'width' => '10%',
    'default' => false,
  ),
  'THE_BASIC_REGION_OF_ACTIVITY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_THE_BASIC_REGION_OF_ACTIVITY',
    'width' => '10%',
  ),
  'FIELD_OF_ACTIVITY' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_FIELD_OF_ACTIVITY',
    'width' => '10%',
  ),
  'INTEREST_SOURCE' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_INTEREST_SOURCE',
    'width' => '10%',
  ),
  'THE_RESPONSIBLE' => 
  array (
    'type' => 'relate',
    'studio' => 'visible',
    'label' => 'LBL_THE_RESPONSIBLE',
    'width' => '10%',
    'default' => false,
  ),
  'TRADE_MARKS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_TRADE_MARKS',
    'width' => '10%',
    'default' => false,
  ),
  'ORGANIZATION_DATE_OF_CREATION' => 
  array (
    'type' => 'date',
    'label' => 'LBL_ORGANIZATION_DATE_OF_CREATION',
    'width' => '10%',
    'default' => false,
  ),
  'ORGANIZATIONAL_LEGAL_FORM' => 
  array (
    'type' => 'enum',
    'studio' => 'visible',
    'label' => 'LBL_ORGANIZATIONAL_LEGAL_FORM',
    'width' => '10%',
    'default' => false,
  ),
  'PHONE_FAX' => 
  array (
    'width' => '10%',
    'label' => 'LBL_PHONE_FAX',
    'default' => false,
  ),
  'BILLING_ADDRESS_STREET' => 
  array (
    'width' => '15%',
    'label' => 'LBL_BILLING_ADDRESS_STREET',
    'default' => false,
  ),
  'BILLING_ADDRESS_STATE' => 
  array (
    'width' => '7%',
    'label' => 'LBL_BILLING_ADDRESS_STATE',
    'default' => false,
  ),
  'BILLING_ADDRESS_POSTALCODE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_BILLING_ADDRESS_POSTALCODE',
    'default' => false,
  ),
  'BILLING_ADDRESS_COUNTRY' => 
  array (
    'width' => '10%',
    'label' => 'LBL_BILLING_ADDRESS_COUNTRY',
    'default' => false,
  ),
  'SHIPPING_ADDRESS_STREET' => 
  array (
    'width' => '15%',
    'label' => 'LBL_SHIPPING_ADDRESS_STREET',
    'default' => false,
  ),
  'SHIPPING_ADDRESS_CITY' => 
  array (
    'width' => '10%',
    'label' => 'LBL_SHIPPING_ADDRESS_CITY',
    'default' => false,
  ),
  'SHIPPING_ADDRESS_STATE' => 
  array (
    'width' => '7%',
    'label' => 'LBL_SHIPPING_ADDRESS_STATE',
    'default' => false,
  ),
  'SHIPPING_ADDRESS_POSTALCODE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_SHIPPING_ADDRESS_POSTALCODE',
    'default' => false,
  ),
  'SHIPPING_ADDRESS_COUNTRY' => 
  array (
    'width' => '10%',
    'label' => 'LBL_SHIPPING_ADDRESS_COUNTRY',
    'default' => false,
  ),
  'PHONE_ALTERNATE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_PHONE_ALT',
    'default' => false,
  ),
  'WEBSITE' => 
  array (
    'width' => '10%',
    'label' => 'LBL_WEBSITE',
    'default' => false,
  ),
  'OWNERSHIP' => 
  array (
    'width' => '10%',
    'label' => 'LBL_OWNERSHIP',
    'default' => false,
  ),
  'EMPLOYEES' => 
  array (
    'width' => '10%',
    'label' => 'LBL_EMPLOYEES',
    'default' => false,
  ),
  'TICKER_SYMBOL' => 
  array (
    'width' => '10%',
    'label' => 'LBL_TICKER_SYMBOL',
    'default' => false,
  ),
);
?>
