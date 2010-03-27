<?php
$module_name = 'd1_offer';
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
            'name' => 'name',
            'label' => 'LBL_NAME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_transaction_is_possible',
            'studio' => 'visible',
            'label' => 'LBL_THE_TRANSACTION_IS_POSSIBLE',
          ),
          1 => 
          array (
            'name' => 'object_of_the_transaction',
            'studio' => 'visible',
            'label' => 'LBL_OBJECT_OF_THE_TRANSACTION',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'offer_type',
            'studio' => 'visible',
            'label' => 'LBL_OFFER_TYPE',
          ),
          1 => 
          array (
            'name' => 'result',
            'studio' => 'visible',
            'label' => 'LBL_RESULT',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'display_date',
            'label' => 'LBL_DISPLAY_DATE',
          ),
          1 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO_NAME',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'condition_offer',
            'studio' => 'visible',
            'label' => 'LBL_CONDITION_OFFER',
          ),
          1 => 
          array (
            'name' => 'the_status',
            'studio' => 'visible',
            'label' => 'LBL_THE_STATUS',
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
    ),
  ),
);
?>
