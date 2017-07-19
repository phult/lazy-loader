<?php

namespace App\Utils;
use \DateTime;

class DateTimeUtil
{
    /**
     *
     * @param $past string or int
     * @param $sqlFormat bool
     * @param $now string time default now
     * @return string
     */
    public static function timeAgo($past, $sqlFormat = true, $now = "now") {

        $secondsPerMinute = 60;
        $secondsPerHour = $secondsPerMinute * 60;
        $secondsPerDay = $secondsPerHour * 24;
        $secondsPerMonth = $secondsPerDay * 30;
        $secondsPerYear = $secondsPerMonth * 12;

        // sets the default timezone
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $pastTimeStamp = $past;
        if ($sqlFormat == true) {
            // finds the past in datetime
            $pastTimeStamp = strtotime($past);
        } else {

        }
        // finds the current datetime
        $now = strtotime($now);
        // creates the "time ago" string. This always starts with an "about..."
        $timeAgo = "";
        // finds the time difference
        $timeDifference = $now - $pastTimeStamp;
        // less than 29secs
        if ($timeDifference <= 29) {
            $timeAgo = sprintf('%d giây', $timeDifference);
        } // more than 29secs and less than 1min29secss
        else {
            // between 29secs  and 44mins29secs
            if ($timeDifference > 29 && $timeDifference <= (($secondsPerMinute * 44) + 29)) {
                $minutes = ceil($timeDifference / $secondsPerMinute);
                //"%d minutes"
                $timeAgo = sprintf(' %d phút', $minutes);
            } else {
                // between 44mins30secs and 23hours59mins29secs
                if ($timeDifference >= (($secondsPerMinute * 44) + 29) &&
                    $timeDifference <= (($secondsPerHour * 23) + ($secondsPerMinute * 59) + 29)
                ) {
                    $hours = ceil($timeDifference / $secondsPerHour);

                    $timeAgo = sprintf('%d giờ', $hours);
                } else {
                    return date_format(date_create($past), 'H:i, d/m/Y ');
                }
            }
        }
        $timeAgo = $timeAgo . ' trước';
        return trim($timeAgo);
    }

    public static function elapseTime($datetime, $full = false) {
	    $now = new DateTime();
	    $ago = new DateTime($datetime);
	    $diff = $now->diff($ago);
	    $diff->w = floor($diff->d / 7);
	    $diff->d -= $diff->w * 7;
	    $string = array(
	        'y' => 'year',
	        'm' => 'month',
	        'w' => 'week',
	        'd' => 'day',
	        'h' => 'hour',
	        'i' => 'minute',
	        's' => 'second',
	    );
	    foreach ($string as $k => &$v) {
	        if ($diff->$k) {
	            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
	        } else {
	            unset($string[$k]);
	        }
	    }
	    if (!$full) $string = array_slice($string, 0, 1);
	    return $string ? implode(', ', $string) . ' ago' : 'just now';
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
