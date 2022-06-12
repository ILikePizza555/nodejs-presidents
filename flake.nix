{
  description = "An implementation of the card game Presidents for the web";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-21.05;
    flake-utils.url = github:numtide/flake-utils;
  };

  outputs = {self, nixpkgs, flake-utils}:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        defaultPackage = pkgs.stdenv.mkDerivation {
          pname = "presidents";
          version = "0.1.0";
          src = ./.;
          buildInputs = [
            pkgs.nodejs-16_x
            pkgs.yarn
          ];
        };
      }
    );

}
