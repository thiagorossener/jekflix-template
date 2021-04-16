# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekflix"
  spec.version       = "4.0.0"
  spec.authors       = ["Thiago Rossener"]
  spec.email         = ["thiago@rossener.com"]

  spec.summary       = "A Jekyll theme inspired by Netflix."
  spec.homepage      = "https://jekflix.rossener.com/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_(includes|layouts|sass)/|assets/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i) }

  spec.add_runtime_dependency "rouge", "~> 3.26.0"
  spec.add_runtime_dependency "jekyll", "~> 4.2.0"
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 1.1.0"

  spec.add_development_dependency "bundler", "~> 2.2.0"
  spec.add_development_dependency "rake", "~> 13.0.0"
end
