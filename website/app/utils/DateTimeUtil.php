<?php

namespace App\Utils;
use \DateTime;

class DateTimeUtil {
    public static function elapseTime($datetime, $full = false) {
        $retval = 'just now';
	    $now = new DateTime();
	    $ago = new DateTime($datetime);
	    $diff = $now->diff($ago);
        if ($diff->d >= 0) {
            $diff->w = floor($diff->d / 7);
    	    $diff->d -= $diff->w * 7;
    	    $retval = array(
    	        'y' => 'year',
    	        'm' => 'month',
    	        'w' => 'week',
    	        'd' => 'day',
    	        'h' => 'hour',
    	        'i' => 'minute',
    	        's' => 'second',
    	    );
    	    foreach ($retval as $k => &$v) {
    	        if ($diff->$k) {
    	            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
    	        } else {
    	            unset($retval[$k]);
    	        }
    	    }
    	    if (!$full) $retval = array_slice($retval, 0, 1);
    	    $retval = $retval ? implode(', ', $retval) . ' ago' : 'just now';
        }
	    return $retval;
	}

    public static function getSlug($text, $allowUnder = false) {
        static $charMap = array(
            "à" => "a", "ả" => "a", "ã" => "a", "á" => "a", "ạ" => "a", "ă" => "a", "ằ" => "a", "ẳ" => "a", "ẵ" => "a", "ắ" => "a", "ặ" => "a", "â" => "a", "ầ" => "a", "ẩ" => "a", "ẫ" => "a", "ấ" => "a", "ậ" => "a",
            "đ" => "d",
            "è" => "e", "ẻ" => "e", "ẽ" => "e", "é" => "e", "ẹ" => "e", "ê" => "e", "ề" => "e", "ể" => "e", "ễ" => "e", "ế" => "e", "ệ" => "e",
            "ì" => "i", "ỉ" => "i", "ĩ" => "i", "í" => "i", "ị" => "i",
            "ò" => "o", "ỏ" => "o", "õ" => "o", "ó" => "o", "ọ" => "o", "ô" => "o", "ồ" => "o", "ổ" => "o", "ỗ" => "o", "ố" => "o", "ộ" => "o", "ơ" => "o", "ờ" => "o", "ở" => "o", "ỡ" => "o", "ớ" => "o", "ợ" => "o",
            "ù" => "u", "ủ" => "u", "ũ" => "u", "ú" => "u", "ụ" => "u", "ư" => "u", "ừ" => "u", "ử" => "u", "ữ" => "u", "ứ" => "u", "ự" => "u",
            "ỳ" => "y", "ỷ" => "y", "ỹ" => "y", "ý" => "y", "ỵ" => "y",
            "À" => "A", "Ả" => "A", "Ã" => "A", "Á" => "A", "Ạ" => "A", "Ă" => "A", "Ằ" => "A", "Ẳ" => "A", "Ẵ" => "A", "Ắ" => "A", "Ặ" => "A", "Â" => "A", "Ầ" => "A", "Ẩ" => "A", "Ẫ" => "A", "Ấ" => "A", "Ậ" => "A",
            "Đ" => "D",
            "È" => "E", "Ẻ" => "E", "Ẽ" => "E", "É" => "E", "Ẹ" => "E", "Ê" => "E", "Ề" => "E", "Ể" => "E", "Ễ" => "E", "Ế" => "E", "Ệ" => "E",
            "Ì" => "I", "Ỉ" => "I", "Ĩ" => "I", "Í" => "I", "Ị" => "I",
            "Ò" => "O", "Ỏ" => "O", "Õ" => "O", "Ó" => "O", "Ọ" => "O", "Ô" => "O", "Ồ" => "O", "Ổ" => "O", "Ỗ" => "O", "Ố" => "O", "Ộ" => "O", "Ơ" => "O", "Ờ" => "O", "Ở" => "O", "Ỡ" => "O", "Ớ" => "O", "Ợ" => "O",
            "Ù" => "U", "Ủ" => "U", "Ũ" => "U", "Ú" => "U", "Ụ" => "U", "Ư" => "U", "Ừ" => "U", "Ử" => "U", "Ữ" => "U", "Ứ" => "U", "Ự" => "U",
            "Ỳ" => "Y", "Ỷ" => "Y", "Ỹ" => "Y", "Ý" => "Y", "Ỵ" => "Y"
        );

        $text = strtr($text, $charMap);

        $text = self::cleanUpSpecialChars($text, $allowUnder);
        return strtolower($text);
    }

    private static function cleanUpSpecialChars($text, $allowUnder = false) {
        $regExpression = "`\W`i";
        if ($allowUnder)
            $regExpression = "`[^a-zA-Z0-9-]`i";

        $text = preg_replace(array($regExpression, "`[-]+`",), "-", $text);
        return trim($text, "-");
    }
}
