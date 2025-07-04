const {execSync} = require("child_process");

const commands = [
    "git clone git@deltasampler:deltasampler/block_world.git block_world",
    "git clone git@deltasampler:deltasampler/cl_ts.git cl",
    "git clone git@deltasampler:deltasampler/driving.git",
    "git clone git@deltasampler:deltasampler/engine_ts.git engine",
    "git clone git@deltasampler:deltasampler/gravitation.git gravitation",
    "git clone git@deltasampler:deltasampler/gui_ts.git gui",
    "git clone git@deltasampler:deltasampler/model_viewer.git",
    "git clone git@deltasampler:deltasampler/panel_templater.git",
    "git clone git@deltasampler:deltasampler/pixel_sandbox.git",
    "git clone git@deltasampler:deltasampler/plant_gen.git",
    "git clone git@deltasampler:deltasampler/ray_marcher.git",
    "git clone git@deltasampler:deltasampler/simple_demos.git",
    "git clone git@deltasampler:deltasampler/square.git",
    "git clone git@deltasampler:deltasampler/tetris.git",
    "git clone git@deltasampler:deltasampler/turmite.git"
];

for (const command of commands) {
    try {
        execSync(command, {stdio: "inherit", shell: true});
    } catch (error) {
        console.error(error.message);
    }
}
