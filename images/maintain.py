import os
from base64 import b32hexencode
from hashlib import shake_256
from random import getrandbits

__self__ = os.path.abspath(__file__)
current = os.path.dirname(__self__)

debug = False


def xname(content: bytes, extension: str) -> str:
    return (
        "x"
        + b32hexencode(
            shake_256(
                bytes.fromhex("8a1ff80cd6e673ad4f8b8bae8c4636da")
                + content
                + bytes.fromhex("dcf57cdbe0cfdee2c615c7a5f9a29004")
                + extension.encode()
                + bytes.fromhex("51ef402550597b025a392d08fc37d2dd")
            ).digest(20)
        )
        .decode()
        .lower()
        + extension
    )


def beautify_path(path: str) -> str:
    return os.path.normpath(os.path.relpath(path, current))


def rename(cwd: str, name: str) -> None:
    basename, extension = os.path.splitext(name)
    path = os.path.join(cwd, name)
    if path != __self__:
        with open(path, "rb") as fin:
            content = fin.read()
        if not extension and basename.startswith("."):
            extension = basename
        immutable = os.path.join(cwd, xname(content, extension))
        if debug:
            print("debugging", beautify_path(path), "=>", beautify_path(immutable))
        if path != immutable:
            try:
                print("moving", beautify_path(path), "=>", beautify_path(immutable))
                os.rename(path, immutable)
            except FileExistsError:
                os.remove(path)


if __name__ == "__main__":
    for name in os.listdir(current):
        if os.path.isfile(path := os.path.join(current, name)):
            rename(cwd=current, name=name)
        elif os.path.isdir(path) and (debug or getrandbits(8) == 0):
            print("scanning", path)
            for name in os.listdir(path):
                if os.path.isfile(os.path.join(path, name)):
                    rename(cwd=path, name=name)
