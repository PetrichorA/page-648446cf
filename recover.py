import os

from minify import chdir, current_dir, remove, rename


def match(name: str, extension: str) -> bool:
    return name.endswith('.max' + extension)


def replace(name: str, extension: str) -> str:
    return name[:-len('.max') - len(extension)] + extension


if __name__ == '__main__':
    from functools import partial

    match_js = partial(match, extension='.js')
    match_css = partial(match, extension='.css')

    replace_js = partial(replace, extension='.js')
    replace_css = partial(replace, extension='.css')

    for root, _, files in os.walk(current_dir):
        chdir(root)
        for name in files:
            if match_js(name):
                minimum = replace_js(name)
                remove(minimum)
                rename(name, minimum)
            elif match_css(name):
                minimum = replace_css(name)
                remove(minimum)
                rename(name, minimum)
