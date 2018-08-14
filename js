#!/usr/bin/env php
<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

use Symfony\Component\Console\Application;

$application = new Application();

// ... register commands
$application->add(new \App\Console\Command\TestCommand());

$application->run();