import os

current_dir = os.path.dirname(os.path.abspath(__file__))
temporary_name_0 = '88878fba-864a-bdaf-64e8-11e208ae7d8a'
temporary_name_1 = 'd07270f1-439e-7cec-ca32-07cd864c6fbd'

terser = r'wsl terser "{input}" --compress --mangle --comments false --ecma 2015 -o "{output}"'
cleancss = r'wsl cleancss -O1 specialComments:0 -O2 "{input}" -o "{output}"'

# ---


def rename(old: str, new: str):
    print('rename', old, 'to', new)
    os.rename(old, new)


def remove(name: str):
    print('remove', name)
    os.remove(name)


def chdir(name: str):
    print('chdir', name)
    os.chdir(name)

# ---


def match(name: str, extension: str) -> bool:
    return name.endswith(extension) and not name.endswith('.max' + extension)


def replace(name: str, extension: str) -> str:
    return name[:-len(extension)] + '.max' + extension


def execute(command: str, input: str, output: str):
    execution = command.format(input=input, output=output)
    print(execution)
    os.system(execution)


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
                maximum = replace_js(name)
                rename(name, maximum)
                execute(terser, maximum, temporary_name_0)
                execute(terser, temporary_name_0, temporary_name_1)
                if os.path.getsize(temporary_name_0) <= os.path.getsize(temporary_name_1):
                    rename(temporary_name_0, name)
                else:
                    rename(temporary_name_1, name)
            elif match_css(name):
                maximum = replace_css(name)
                rename(name, maximum)
                execute(cleancss, maximum, name)
        if os.path.isfile(temporary_name_0):
            remove(temporary_name_0)
        if os.path.isfile(temporary_name_1):
            remove(temporary_name_1)
