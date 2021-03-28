<?php

/**
 * This is project's console commands configuration for Robo task runner.
 *
 * @see http://robo.li/
 */
class RoboFile extends \Robo\Tasks
{
    /**
     * Run app
     */
    public function up()
    {
        $this->taskExec('cd .. && docker-compose up')->run();
    }

    /**
     * Get into docker instance (if running)
     * @param string $module
     */
    public function access($user = '1000', $module = 'php-apache')
    {
        $this->taskExec("docker-compose exec --user {$user} {$module} /bin/bash")->run();
    }

    /**
     * Watch logs in real time
     * tail -f log
     */
    public function watchLog($filename = 'laravel')
    {
        $this->taskExec('tail -f storage/logs/'.$filename.'.log')->run();
    }

    /**
     * Access server via ssh
     *
     */
    public function accessServer($env = 'test')
    {
        $this->taskExec('ssh -p 2222 ilana@192.232.249.113')->run();
//        $this->taskExec("ssh -p 2222 ilana@192.232.249.113:/home1/ilana/{$env}.szlab.com.ar/src")->run();
    }

    /**
     * Needs a valid ssh public key
     * Ex: robo copy:to-server resources/assets/folder/ resources/assets/folder
     *
     * @param string $from
     * @param string $to
     * @param string $env
     */
    public function copyToServer($from, $to, $env = 'test')
    {
        $this->taskExec("rsync -avz --update --rsh='ssh -i ~/.ssh/szlab -p 2222' ./{$from} ilana@192.232.249.113:/home1/ilana/{$env}.szlab.com.ar/src/{$to}")->run();
    }
}
