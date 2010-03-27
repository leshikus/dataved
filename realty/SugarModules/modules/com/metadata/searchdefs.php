<?php
$module_name = 'd1_com';
$_module_name = 'd1_com';
$searchdefs [$module_name] = 
array (
  'layout' => 
  array (
    'basic_search' => 
    array (
      0 => 'name',
      1 => 'billing_address_city',
      2 => 'phone_office',
      3 => 
      array (
        'name' => 'address_street',
        'label' => 'LBL_BILLING_ADDRESS',
        'type' => 'name',
        'group' => 'billing_address_street',
      ),
      4 => 
      array (
        'name' => 'current_user_only',
        'label' => 'LBL_CURRENT_USER_FILTER',
        'type' => 'bool',
      ),
    ),
    'advanced_search' => 
    array (
      'name' => 
      array (
        'name' => 'name',
        'default' => true,
      ),
      'address_street' => 
      array (
        'name' => 'address_street',
        'label' => 'LBL_ANY_ADDRESS',
        'type' => 'name',
        'default' => true,
      ),
      'phone' => 
      array (
        'name' => 'phone',
        'label' => 'LBL_ANY_PHONE',
        'type' => 'name',
        'default' => true,
      ),
      'website' => 
      array (
        'name' => 'website',
        'default' => true,
      ),
      'address_city' => 
      array (
        'name' => 'address_city',
        'label' => 'LBL_CITY',
        'type' => 'name',
        'default' => true,
      ),
      'annual_revenue' => 
      array (
        'name' => 'annual_revenue',
        'default' => true,
      ),
      'address_state' => 
      array (
        'name' => 'address_state',
        'label' => 'LBL_STATE',
        'type' => 'name',
        'default' => true,
      ),
      'employees' => 
      array (
        'name' => 'employees',
        'default' => true,
      ),
      'industry' => 
      array (
        'name' => 'industry',
        'default' => true,
      ),
      'address_postalcode' => 
      array (
        'name' => 'address_postalcode',
        'label' => 'LBL_POSTAL_CODE',
        'type' => 'name',
        'default' => true,
      ),
      'ticker_symbol' => 
      array (
        'name' => 'ticker_symbol',
        'default' => true,
      ),
      'd1_com_type' => 
      array (
        'name' => 'd1_com_type',
        'default' => true,
      ),
      'address_country' => 
      array (
        'name' => 'address_country',
        'label' => 'LBL_COUNTRY',
        'type' => 'name',
        'default' => true,
      ),
      'rating' => 
      array (
        'name' => 'rating',
        'default' => true,
      ),
      'assigned_user_id' => 
      array (
        'name' => 'assigned_user_id',
        'type' => 'enum',
        'label' => 'LBL_ASSIGNED_TO',
        'function' => 
        array (
          'name' => 'get_user_array',
          'params' => 
          array (
            0 => false,
          ),
        ),
        'default' => true,
      ),
      'ownership' => 
      array (
        'name' => 'ownership',
        'default' => true,
      ),
    ),
  ),
  'templateMeta' => 
  array (
    'maxColumns' => '3',
    'widths' => 
    array (
      'label' => '10',
      'field' => '30',
    ),
  ),
);
?>
